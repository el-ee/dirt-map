# this file sort of flips the axes of the generate-cluster-species data outputs

# Create JSON File for d3 Clustered Circles plot from tab-separated value file of taxa data
# where csv file looks like

# Kingdom	Genus	Family	[...]	Sample1	Sample2	Sample3
# K1 Name	G1 Name	F1 Name	[...]	S1 Percent	S2 Percent	S3 Percent
# K1 Name	G1 Name	F2 Name	[...]	S1 Percent	S2 Percent	S3 Percent
# ...
# KLast Name	GLast Name	FLast Name	[...]	S1 Percent	S2 Percent	S3 Percent

# one JSON file per Bacteria: Bx_<output_filebase>.json  
# with data from that bacteria's row in json format:
# [{
# "taxa": 
#	{ "Row" : <row number>,
#		"Kingdom" : "K1 Name", 
#		"Genus" : "G1 Name", 
#		"Family" : "F1 Name", 
#		[...however deep the taxa is...]},
# "distribution" : 
# 	{ "sample" : "S1", 
#		"percent": <percent abundance for this sample>}, 
# 	{"sample" : "S2", 
#		"percent": <percent abundance for this sample>}
# 	{ [...however many samples...]}
# }]


import csv
import json

## YOU MUST SET UP THESE VARIABLES TO POINT TO YOUR FILES 
input_path='../original_data/'
input_filename='TrimmedTaxa.genus.percent.txt'

output_path = './cluster-samples-genus-trimmed/'
output_filebase='cluster-samples-genus_row_'

# YOU MUST SPECIFY the number of header columns in your input file 
# this should be equal to the depth of the taxonomy
header_cols=6


with open(input_path + input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	data_list=[]
	for row in datareader:
		data_list.append(row)

for row in range(1, len(data_list)):
	output_dict = {}
	output_filename=output_filebase + str(row) + '.json'
	
	# get taxa hierarchy names from first columns
	taxa_dict = {}
	taxa_dict["Row"] = row # record row number for later ease of use
	
	for col in range(0, header_cols):
		taxa_dict[data_list[0][col]] = data_list[row][col]
	
	output_dict["taxa"] = taxa_dict
	
	
	# get values from the rest of the columns
	distribution_array = []
	for col in range(header_cols, len(data_list[row])):
		# trash values < .01% -- they won't render anyway
		if(float(data_list[row][col]) > 0.01):
			temp_dict = {}
			temp_dict["sample"] = data_list[0][col]
			temp_dict["percent"] = data_list[row][col]
			distribution_array.append(temp_dict)
	
	output_dict["distribution"] = distribution_array
		
	# write out file for this bacteria
	with open(output_path + output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_dict, sort_keys=True, separators=(',',':'), indent=2))
		