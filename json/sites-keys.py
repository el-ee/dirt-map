sites_key =  {
  "fire" : ["S08", "S07", "S20", "S21", "S22", "S23", "S57", "S60", "S61", "S62"], 
  "on trail" : ["S02", "S05", "S11", "S15", "S17", "S26", "S30", "S31", "S35", "S36", "S40", "S46", "S50", "S53"],
  "water" : ["S13", "S48", "S14", "S49", "S52", "S55"],
  "plant" : ["S01", "S09", "S19", "S24", "S29", "S32", "S33", "S34", "S39", "S45", "S47", "S51", "S54", "S58", "S59"], 
  "rocks" : ["S10", "S41", "S42", "S43", "S44", "S56"],
  "other" : ["S03", "S04", "S06", "S12", "S16", "S18", "S25", "S27", "S28", "S37", "S38"]
}

new_dict = {}

for key in sites_key:
  for item in sites_key[key]:
	  new_dict[item] = key
	  
print new_dict
  
