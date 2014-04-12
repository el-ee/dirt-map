c_brown = "#8c564b";
c_orange = "#ff7f0e";
c_red = "#d62728";
c_pink = "#e377c2";
c_purple = "#9467bd";
c_blue = "#1f77b4";
c_turq = "#17becf";
c_green = "#2ca02c";

c2_blue = "#51ACEB";
c2_green = "#94C93D";
c2_yellow = "#"
c2_orange = "#F1AA4D";
c2_red = "#F77064";
c2_pink = "#FF78C2";
c2_purple = "#9263F6";

c2_blue = "#53B0F0";
c2_green = "#94C93D";
c2_yellow = "#fbd400"
c2_orange = "#f89e35";
// c2_red = "#d96652";
c2_red = "#f6745e"
c2_pink = "#F897D3";
// c2_purple = "#7B76E4";
c2_purple = "#A18DF9"


c3_blue =  "#3563AB";
c3_green = "#6a9129";
c3_yellow = "#F2b940";
// c3_orange = "#C98411";
c3_orange = c2_orange;
c3_red = "#c82e18";
c3_pink = c2_pink;
c3_purple = "#582BC5";

c3_blue = "#2B6DAF";
c3_green = "#427B02";
c3_yellow = "#F9BE46";
c3_orange = "#F8A949";
c3_red = "#B63835";
c3_pink = "#E770B9";
c3_purple = "#4C3AC6";

c_grey = "#999999"

// var clusters_bright = {"Actinobacteria": c2_purple, 
// "Acidobacteria": c2_blue,
// "Firmicutes" : c2_red,
// "Proteobacteria" : c2_green,
// "Bacteroidetes" : c2_yellow,
// // "Deinococcus-Thermus" : c2_orange,
// "Gemmatimonadetes" : c2_pink,
// "Other" : c2_orange,
// "No Hit" : c_grey};

var clusters_bright = {
	"Actinobacteria": c2_orange, 
	"Acidobacteria": c2_blue,
	"Firmicutes" : c2_yellow,
	"Proteobacteria" : c2_green,
	"Bacteroidetes" : c2_red,
	// "Deinococcus-Thermus" : c2_orange,
	// "Gemmatimonadetes" : c2_pink,
	"Other" : c2_purple,
	"No Hit" : c2_pink
}

var sites_bright = {
	"fire": c2_red, 
	"on trail": c2_yellow,
	"plant" : c2_green,
	"water" : c2_blue,
	"rocks" : c_grey,
	"other" : c2_purple,
}

sites_key = {'S46': 'on trail', 'S36': 'on trail', 'S42': 'rocks', 'S31': 'on trail', 'S25': 'other', 'S16': 'other', 'S57': 'fire', 'S56': 'rocks', 'S55': 'water', 'S54': 'plant', 'S53': 'on trail', 'S52': 'water', 'S51': 'plant', 'S50': 'on trail', 'S15': 'on trail', 'S14': 'water', 'S59': 'plant', 'S58': 'plant', 'S19': 'plant', 'S18': 'other', 'S39': 'plant', 'S6': 'other', 'S13': 'water', 'S34': 'plant', 'S11': 'on trail', 'S10': 'rocks', 'S17': 'on trail', 'S30': 'on trail', 'S33': 'plant', 'S32': 'plant', 'S38': 'other', 'S22': 'fire', 'S23': 'fire', 'S20': 'fire', 'S47': 'plant', 'S26': 'on trail', 'S41': 'rocks', 'S24': 'plant', 'S43': 'rocks', 'S28': 'other', 'S29': 'plant', 'S62': 'fire', 'S48': 'water', 'S60': 'fire', 'S61': 'fire', 'S8': 'fire', 'S9': 'plant', 'S45': 'plant', 'S44': 'rocks', 'S1': 'plant', 'S2': 'on trail', 'S3': 'other', 'S4': 'other', 'S5': 'on trail', 'S49': 'water', 'S7': 'fire', 'S35': 'on trail', 'S21': 'fire', 'S12': 'other', 'S40': 'on trail', 'S37': 'other', 'S27': 'other'}


var clusters_darker = {
	"Actinobacteria": c3_orange, 
	"Acidobacteria": c3_blue,
	"Firmicutes" : c3_yellow,
	"Proteobacteria" : c3_green,
	"Bacteroidetes" : c3_red,
	// "Deinococcus-Thermus" : c2_orange,
//	"Gemmatimonadetes" : c3_pink,
	"Other" : c3_purple,
	"No Hit" : c3_pink
}

function drawLegend(colors) {

	var key_dim = {
		radius: 5, spacing: 5, text_w: 200
	};
	
	
	var legend = d3.select("#legend").append("svg")
		.attr("width", key_dim.text_w)
		.attr("height", (key_dim.radius*2 + key_dim.spacing) * d3.keys(colors).length);
			
	var key_element = legend.selectAll("key_element")
		.data(d3.entries(colors))
		.enter().append("g")
		.attr("transform", function(d, i) {
			return "translate(0," + i * (key_dim.radius*2 + key_dim.spacing) + ")";
		});
		
		
	key_element.append("circle")
		.attr("r", key_dim.radius)
		.style("fill", function(d) {return d.value});
	
		
	key_element.append("text")
		.attr("x", key_dim.radius*2 + key_dim.spacing)
		.attr("y", key_dim.radius)
		.attr("font-size", key_dim.radius*2 + key_dim.spacing/2)
		.attr("text-anchor", "center")
		.text(function(d) { return d.key});

}