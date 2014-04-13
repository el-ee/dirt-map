// Colors modified from the tomorrow version of Chris Kempson's base16
// http://chriskempson.github.io/base16/#tomorrow

// // base 16 - tomorrow - mod
 
var base00 = "#1d1f21";
var base01 = "#282a2e";
var base02 = "#373b41";
var base03 = "#969896";
var base04 = "#b4b7b4";
var base05 = "#c5c8c6";
var base06 = "#e0e0e0";
var base07 = "#ffffff";
var base08 = "#cc6666"; // red
var base09 = "#de935f"; // orange
var base0A = "#f0c674"; // yellow
var base0B = "#b0bb63"; // green (mod)
var base0C = "#8abeb7"; // turq
var base0D = "#81a2be"; // blue
var base0E = "#b294bb"; // purple
var base0F = "#a67164"; // brown (mod)


var clusters_bright = {
  "Actinobacteria": base0D, 
  "Acidobacteria": base08,
  "Firmicutes" : base0E,
  "Proteobacteria" : base0B, 
  "Bacteroidetes" : base09, 
  "Other" : base0A,
  "No Hit" : base0F
};


var sites_bright = {
	"fire": base08, 
	"on trail": base0A,
	"plant" : base0B,
	"water" : base0D,
	"rocks" : base03,
	"other" : base0E,
};


var network_degree = {
	"0": base03,
	"1": base0E, 
	"2": base0D,
	"3" : base0B,
	"4" : base0A,
	"5" : base09,
	"6" : base08,
};




function drawLegend(colors) {

	var key_dim = {
		radius: 5, spacing: 5, text_w: 200
	};
	
	var legend = d3.select("#legend");
	legend.html("");
	
	var legend = d3.select("#legend").append("svg")
		.attr("width", key_dim.text_w)
		.attr("height", (key_dim.radius*2 + key_dim.spacing) * d3.keys(colors).length);
			
	var key_element = legend.selectAll("key_element")
		.data(d3.entries(colors))
		.enter().append("g")
		.attr("transform", function(d, i) {
			return "translate(5," + (i * (key_dim.radius*2 + key_dim.spacing) + 5) + ")";
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