# Create File for Clustered Circles data

# JSON output should be an array that looks like
# [{cluster: c1, radius: r1}, {cluster: c2, radius: r2}, ... ] 
# where cluster is the name of the cluster category
# and radius represents the value

import csv
import json

input_filename='FullTaxa.class.percent.txt'
output_filebase='cluster-class.json'

#Number of Columns Containing Header Data (Taxa)
header_cols=3

with open('../original_data/'+input_filename, 'rb') as cvsfile:
	datareader = csv.reader(cvsfile, delimiter='\t')
	temp_list=[]
	for row in datareader:
		temp_list.append(row)


#get names for dictionary items
header_array = []
for col in range(0, header_cols):
	header_array.append(temp_list[0][col])


for col in range(header_cols,len(temp_list[0])):
	output_filename=temp_list[0][col]+'_'+output_filebase
	
	#create new array for this sample
	output_array = []
	
	#iterate through sample
	for row in range(1,len(temp_list)):
		#create dictionary where each item is a value from this row
		
		row_dict = {}
		for col2 in range(0, header_cols):
			row_dict[header_array[col2]] = temp_list[row][col2]
		
		row_dict['Percent'] = temp_list[row][col]
		
		output_array.append(row_dict)
	
	with open('./cluster-class/'+output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_array, sort_keys=True, separators=(',',':'), indent=2))
		