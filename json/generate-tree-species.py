

import csv
import json


input_filename='FullTaxa.species.percent.txt'
output_filebase='tree_species.json'
header_cols=7

def dict_convert(d):
	result = []
	for key in d:
		if isinstance(d[key], dict):
			result.append({"name":key, "children":dict_convert(d[key])})
		else:
			result.append({"name":key, "percent":d[key]})
	return result
	
with open('../original_data/'+input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	input_data=[]
	for row in datareader:
		input_data.append(row)

for col in range(header_cols,len(input_data[0])):
	output_filename=input_data[0][col]+'_'+output_filebase
	
	# create new dictionary for this sample
	# first name entry is sample number
	output_dict = {}
	output_dict[input_data[0][col]]={}
	
	#iterate through sample, adding each row to the sample's dictionary
	newlist=[]
	
	# skip header row, starting with first row with data
	for row in range(1,len(input_data)):
		#access the location of this row's nested dictionary
		temp_dict=output_dict[input_data[0][col]]

		# traverse through header columns, to create children (here key is name, value is empty dictionary)
		for col2 in range(0,header_cols):
			temp_dict=temp_dict.setdefault(input_data[row][col2], {})
		
		# for the last item, set key to value in last header column 
		# and set value to the percent (no more hierarchy here)
		temp_dict[input_data[row][header_cols-1]]=input_data[row][col]
		
		# now convert our nicely formatted dictionary to one with excessive keying ;)
		newlist = dict_convert(output_dict)

	# write out 
	with open('./tree-species/'+output_filename, 'w') as out_file:
		out_file.write(json.dumps(newlist[0], sort_keys=True, separators=(',',':'), indent=2))
