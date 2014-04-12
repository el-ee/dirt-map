# Create JSON File for d3 Clustered Circles plot from tab-separated value file of taxa data
# where csv file looks like

# Kingdom	Genus	Family	[...]	Sample1	Sample2	Sample3
# K1 Name	G1 Name	F1 Name	[...]	S1 Percent	S2 Percent	S3 Percent
# K1 Name	G1 Name	F2 Name	[...]	S1 Percent	S2 Percent	S3 Percent
# ...
# KLast Name	GLast Name	FLast Name	[...]	S1 Percent	S2 Percent	S3 Percent

# one JSON file per sample: Sx_<output_filebase>.json  
# with data from that sample's column in json format:
# [
# { "Kingdom" : "K1 Name", 
#	"Genus" : "G1 Name", 
#	"Family" : "F1 Name", 
#	[...however deep the taxa is...]
#	"Percent" : S1 Percent },
#
#	{ [... row 2 data ...] },
#
#	{ [... etc per row ...] }
# ]


import csv
import json

## YOU MUST SET UP THESE VARIABLES TO POINT TO YOUR FILES 
input_path='../original_data/'
input_filename='FullTaxa.species.percent.txt'

output_path = './cluster-species/'
output_filebase='cluster-species_'

# YOU MUST SPECIFY the number of header columns in your input file 
# this should be equal to the depth of the taxonomy
header_cols=7


with open(input_path + input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	temp_list=[]
	for row in datareader:
		temp_list.append(row)


#get names for dictionary items
header_array = []
for col in range(0, header_cols):
	header_array.append(temp_list[0][col])


for col in range(header_cols,len(temp_list[0])):
	output_filename=output_filebase + temp_list[0][col]+'.json'
	
	#create new array for this sample
	output_array = []
	
	#iterate through sample
	for row in range(1,len(temp_list)):
		#create dictionary where each item is a value from this row
		
		row_dict = {}
		for col2 in range(0, header_cols):
			row_dict[header_array[col2]] = temp_list[row][col2]
		
		row_dict['Percent'] = temp_list[row][col]
		
		# scrap values that are too small. just creates extra svg elements 
		# that are too small to see but take up processing power
		if(float(row_dict['Percent']) > 0.01):
			output_array.append(row_dict)
		
	# write out file for this sample
	with open(output_path + output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_array, sort_keys=True, separators=(',',':'), indent=2))
		