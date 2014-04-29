var num_otus = 13856;
var num_full = 1247;
var num_trimmed = 580;

var h_base = 1;
var w_base = num_otus/num_trimmed*h_base; // this makes squares for the most zoomed in ones

var sample_order = ["S6", "S13", "S10", "S3", "S24", "S15", "S12", "S14", "S5", "S57", "S4", "S1", "S48", "S19", "S27", "S16", "S26", "S32", "S11", "S9", "S22", "S25", "S44", "S30", "S2", "S34", "S31", "S38", "S28", "S54", "S36", "S8", "S53", "S29", "S20", "S33", "S18", "S43", "S55", "S45", "S42", "S23", "S46", "S17", "S49", "S59", "S52", "S47", "S39", "S51", "S35", "S40", "S37", "S50", "S21", "S41", "S58", "S62", "S61", "S56", "S60", "S7"]