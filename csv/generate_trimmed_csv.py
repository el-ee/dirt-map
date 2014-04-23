import csv

input_filename="trimmed_table_sorted.csv"
output_filebase = "trimmed-percents.csv"
output_directory = "trimmed-percents"

header_cols = 7

with open(input_filename, 'rb') as csvfile:
	datareader = csv.reader(csvfile, delimiter=',')
	data_list = []
	for row in datareader: 
		data_list.append(row)
		
for col in range(header_cols, len(data_list[0])):
	output_filename=data_list[0][col] + "_" + output_filebase
	
	output_array = []


	for row in range(0, len(data_list)):
		current_row = []
	
		# copy this row over
		for col2 in range(0,header_cols):
			current_row.append(data_list[row][col2])
		
		current_row.append(data_list[row][col])
	
		output_array.append(current_row)	

	with open(output_directory+"/"+output_filename, 'w') as out_file:
		out_writer = csv.writer(out_file, delimiter=",")
		out_writer.writerows(output_array)