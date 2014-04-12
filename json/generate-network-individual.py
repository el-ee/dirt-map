import csv
import json

## YOU MUST SET UP THESE VARIABLES TO POINT TO YOUR FILES 
input_path='../original_data/'
input_filename='FullTaxa.phylum.percent.txt'

output_path = './network-individual-phylum/'
output_filebase='network-individual-phylum'

# YOU MUST SPECIFY the number of header columns in your input file 
# this should be equal to the depth of the taxonomy
header_cols=2

# the index of the column from which to group items 
# (e.g. phylum name is the 2nd column, so index = 1)
group_col = 1

## files to output
samples = ["S1", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19", "S2", "S20", "S21", "S22", "S23", "S24", "S25", "S26", "S27", "S28", "S29", "S3", "S30", "S31", "S32", "S33", "S34", "S35", "S36", "S37", "S38", "S39", "S4", "S40", "S41", "S42", "S43", "S44", "S45", "S46", "S47", "S48", "S49", "S5", "S50", "S51", "S52", "S53", "S54", "S55", "S56", "S57", "S58", "S59", "S6", "S60", "S61", "S62", "S7", "S8", "S9"]

## Which phyla to use
phyla =[ "Phylum", # this is to keep the header row 
	"Actinobacteria", 
	"Acidobacteria",
	"Firmicutes",
	"Proteobacteria",
	"Bacteroidetes",
	"No Hit" ]




with open(input_path + input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	data_list=[]
	for row in datareader:
		data_list.append(row)
		


# consolidate rows that should be 'other'
other_row = list(data_list[0])

for c_i in range(len(other_row)):
	other_row[c_i] = 0

other_row[0] = "Bacteria"
other_row[1] = "Other"


for data_row in data_list:	
	if not (data_row[group_col] in phyla):
		for col_idx in range(len(other_row)-header_cols):
			other_row[col_idx+header_cols] = float(other_row[col_idx+header_cols]) + float(data_row[col_idx+header_cols])
		data_row[0]="REMOVE"

data_list.append(other_row)

i=0
while i < len(data_list):
	if (data_list[i][0]=="REMOVE"):
		data_list.remove(data_list[i])
	else:
		i = i+1



## Create json

for sample in samples:
	nodes = []
	links = []

	output_json = {}
	group_dictionary = {}
	
	## CREATE OUTPUT FILE NAME
	output_filename = output_filebase
	output_filename = output_filename+"_"+sample	
	output_filename = output_filename+".json"
	
	
	#### CREATE NODES ARRAY ####

	# create first entry in nodes list for the sample name
	temp_dict = {}
	temp_dict["name"] = sample
	temp_dict["group"] = "Sample"
	nodes.append(temp_dict)
	
	sample_col = data_list[0].index(sample)

	group_count = 0;
	# create group dictionary to look up index numbers
	for row in range(1, len(data_list)):
		if not (data_list[row][group_col] in group_dictionary): 
			group_count = group_count+1
			group_dictionary[data_list[row][group_col]] = group_count

	# create entries for each item in sample_col; let group name be value in group_col 
	for row in range(1, len(data_list)):
		temp_dict = {}
		temp_dict["percent"] = data_list[row][sample_col]
		temp_dict["group"] = data_list[row][1]
		nodes.append(temp_dict)
	


	## CREATE LINKS ARRAY ##
	for row in range(1, len(data_list)):
		if (float(data_list[row][sample_col]) > 0):
			temp_dict = {}
			temp_dict["source"]=0
			temp_dict["target"]=row
			temp_dict["value"]=float(data_list[row][sample_col])
			links.append(temp_dict)
			

	output_json["nodes"]=nodes
	output_json["links"]=links

	with open(output_path + output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_json, separators=(',',':'), indent=2))
		