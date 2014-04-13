import csv
import json

## YOU MUST SET UP THESE VARIABLES TO POINT TO YOUR FILES 
input_path='../original_data/'
input_filename='TrimmedTaxa.genus.percent.txt'

output_path = './network-col-genus/'
output_filebase='network-col-genus'

# YOU MUST SPECIFY the number of header columns in your input file 
# this should be equal to the depth of the taxonomy
header_cols=6

node_col = header_cols-1

collections = {"C1": ["S1", "S2", "S3"], 
"C2": ["S4", "S5", "S6"], 
"C3": ["S7", "S8", "S9"],
"C4": ["S10", "S11", "S12"],
"C5": ["S13", "S14", "S15", "S16"],
"C6": ["S24", "S25", "S26", "S27"],
"C7": ["S20", "S21", "S22", "S23"],
"C10": ["S17", "S18", "S19"],
"C11": ["S36", "S37", "S38", "S39"],
"C12": ["S56"],
"C13": ["S40", "S41"],
"C14": ["S50", "S51", "S52"],
"C15": ["S53", "S54", "S55"],
"C16": ["S45", "S46", "S47"],
"C17": ["S42", "S43", "S44"],
"C18": ["S30", "S32", "S34"],
"C19": ["S31", "S33"],
"C20": ["S28", "S29", "S35"],
"C21": ["S57", "S58", "S59", "S60", "S61", "S62"],
"C22": ["S48", "S49"]};

with open(input_path + input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	data_list=[]
	for row in datareader:
		data_list.append(row)
	

for key in collections:
	nodes = []
	links = []

	output_json = {}
	group_dictionary = {}
	samples = collections[key]
	
	## CREATE OUTPUT FILE NAME
	output_filename = output_filebase + "_" + key + ".json"
	
	
	#### CREATE NODES ARRAY ####

	# get array of column indices for samples that i care about
	sample_indices = []
	for sample in samples:
		sample_indices.append(data_list[0].index(sample))

	# create first entires in nodes list for each of the samples
	for sample in sample_indices:
		temp_dict = {}
		temp_dict["name"] = data_list[0][sample]
		temp_dict["group"] = "Sample"
		nodes.append(temp_dict)

	# create entries for each item in node_col
	for row in range(1, len(data_list)):
		temp_dict = {}
		for col in range(0, header_cols):
			temp_dict[data_list[0][col]] = data_list[row][col]
		nodes.append(temp_dict)

	## CREATE LINKS ARRAY ##
	for sample in sample_indices: 
		for row in range(1, len(data_list)):
			if (float(data_list[row][sample]) > 0):
				temp_dict = {}
				temp_dict["source"]=sample_indices.index(sample)
				temp_dict["target"]=len(sample_indices)+row-1
				temp_dict["value"]=float(data_list[row][sample])*100
				links.append(temp_dict)
			

	output_json["nodes"]=nodes
	output_json["links"]=links

	with open(output_path + output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_json, separators=(',',':'), indent=2))
		