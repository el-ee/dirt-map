# Create File for Clustered Circles data

# JSON should be an array that looks like
# [{cluster: c1, radius: r1}, {cluster: c2, radius: r2}, ... ] 
# where cluster is the name of the cluster category
# and radius represents the value

# This should convert in a fairly straightforward way from the CSV file.  

import csv
import json


input_filename='FullTaxa.class.percent.txt'
output_filebase='cluster.json'

#Number of Columns Containing 
header_cols=3

with open('/Users/ellie/Dropbox/PCT-Dirt/data and artifacts/Master Data Files/'+input_filename, 'rb') as cvsfile:
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
	print output_filename
	
	#create new array for this sample
	output_array = []
	
	#iterate through sample
	for row in range(1,len(temp_list)):
		#create dictionary where each item is a value from this row
		
		row_dict = {}
		for col2 in range(0, header_cols):
			row_dict[header_array[col2]] = temp_list[row][col2]
		print row_dict
		
		row_dict['Percent'] = temp_list[row][col]
		print row_dict
		
		output_array.append(row_dict)
	
	with open('/Users/ellie/Dropbox/PCT-Dirt/data and artifacts/d3/json/class-cluster/'+output_filename, 'w') as out_file:
		out_file.write(json.dumps(output_array, sort_keys=True, separators=(',',':'), indent=2))
		print 'file written'