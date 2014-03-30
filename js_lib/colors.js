c_brown = "#8c564b";
c_orange = "#ff7f0e";
c_red = "#d62728";
c_pink = "#e377c2";
c_purple = "#9467bd";
c_blue = "#1f77b4";
c_turq = "#17becf";
c_green = "#2ca02c";

c2_blue =  "#477fb3";
c2_turq = "#43B48A";
c2_green = "#75ab26";
c2_yellow = "#e2c716";
c2_orange = "#F1AA4D";
c2_red = "#F77064";
c2_pink = "#E377BE";
c2_purple = "#7155C9";


c3_blue =  "#3563AB";
c3_green = "#437D05";
c3_yellow = "#F2C04A";
// c3_orange = "#C98411";
c3_orange = "#F1AA4D";
c3_red = "#AA2124";
c3_pink = "#E36AB9";
c3_purple = "#582BC5";

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
	"Gemmatimonadetes" : c2_pink,
	"Other" : c2_purple,
	"No Hit" : c_grey
}


var clusters_darker = {
	"Actinobacteria": c3_orange, 
	"Acidobacteria": c3_blue,
	"Firmicutes" : c3_yellow,
	"Proteobacteria" : c3_green,
	"Bacteroidetes" : c3_red,
	// "Deinococcus-Thermus" : c2_orange,
	"Gemmatimonadetes" : c3_pink,
	"Other" : c3_purple,
	"No Hit" : c_grey
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