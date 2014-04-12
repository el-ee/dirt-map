import csv
import json

## YOU MUST SET UP THESE VARIABLES TO POINT TO YOUR FILES 
input_path='../original_data/'
input_filename='FullTaxa.order.percent.txt'

output_path = './network-custom-order/'
output_filebase='network-custom-order'

# YOU MUST SPECIFY the number of header columns in your input file 
# this should be equal to the depth of the taxonomy
header_cols=4
group_col = 1

node_col = header_cols-1


## which samples to include
collections = [{"name": "on-trail", "samples": ["S2", "S5", "S8", "S11", "S13", "S15", "S17", "S26", "S30", "S31", "S35", "S36", "S40", "S46", "S48", "S50", "S53"]}, 
{"name": "plants", "samples" : ["S1", "S9", "S19", "S21", "S24", "S29", "S32", "S33", "S34", "S39", "S45", "S47", "S51", "S54", "S58", "S59"]}, 
{"name": "water", "samples" : ["S13", "S14", "S48", "S49", "S52", "S55"]}
]






with open(input_path + input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	data_list=[]
	for row in datareader:
		data_list.append(row)
	

for collection in collections:
	nodes = []
	links = []

	output_json = {}
	group_dictionary = {}
	samples = collection["samples"]
	
	## CREATE OUTPUT FILE NAME
	output_filename = output_filebase

	output_filename = output_filename+"_"+collection["name"]
	
	output_filename = output_filename+".json"
	
	
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

	group_count = 0;
	# create group dictionary to look up numbers
	for row in range(1, len(data_list)):
		if not (data_list[row][group_col] in group_dictionary): 
			group_count = group_count+1
			group_dictionary[data_list[row][group_col]] = group_count


	# create entries for each item in node_col; let group be value in group_col
	for row in range(1, len(data_list)):
		temp_dict = {}
		temp_dict["name"] = data_list[row][node_col]
	#	temp_dict["group"] = group_dictionary[data_list[row][group_col]]
		temp_dict["group"] = data_list[row][1]
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
		