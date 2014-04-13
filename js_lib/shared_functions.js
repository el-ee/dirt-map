


// Fetch URL Parameters
// Thanks to: http://www.thecodeship.com/web-development/javascript-url-object/ 

function urlObject(options) {
    "use strict";
    /*global window, document*/

    var url_search_arr,
        option_key,
        i,
        urlObj,
        get_param,
        key,
        val,
        url_query,
        url_get_params = {},
        a = document.createElement('a'),
        default_options = {
            'url': window.location.href,
            'unescape': true,
            'convert_num': true
        };

    if (typeof options !== "object") {
        options = default_options;
    } else {
        for (option_key in default_options) {
            if (default_options.hasOwnProperty(option_key)) {
                if (options[option_key] === undefined) {
                    options[option_key] = default_options[option_key];
                }
            }
        }
    }

    a.href = options.url;
    url_query = a.search.substring(1);
    url_search_arr = url_query.split('&');

    if (url_search_arr[0].length > 1) {
        for (i = 0; i < url_search_arr.length; i += 1) {
            get_param = url_search_arr[i].split("=");

            if (options.unescape) {
                key = decodeURI(get_param[0]);
                val = decodeURI(get_param[1]);
            } else {
                key = get_param[0];
                val = get_param[1];
            }

            if (options.convert_num) {
                if (val.match(/^\d+$/)) {
                    val = parseInt(val, 10);
                } else if (val.match(/^\d+\.\d+$/)) {
                    val = parseFloat(val);
                }
            }

            if (url_get_params[key] === undefined) {
                url_get_params[key] = val;
            } else if (typeof url_get_params[key] === "string") {
                url_get_params[key] = [url_get_params[key], val];
            } else {
                url_get_params[key].push(val);
            }

            get_param = [];
        }
    }

    urlObj = {
        protocol: a.protocol,
        hostname: a.hostname,
        host: a.host,
        port: a.port,
        hash: a.hash.substr(1),
        pathname: a.pathname,
        search: a.search,
        parameters: url_get_params
    };

    return urlObj;
}

var site_to_sample = {
  "fire" : ["S08", "S07", "S20", "S21", "S22", "S23", "S57", "S60", "S61", "S62"], 
  "on trail" : ["S02", "S05", "S11", "S15", "S17", "S26", "S30", "S31", "S35", "S36", "S40", "S46", "S50", "S53"],
  "water" : ["S13", "S48", "S14", "S49", "S52", "S55"],
  "plant" : ["S01", "S09", "S19", "S24", "S29", "S32", "S33", "S34", "S39", "S45", "S47", "S51", "S54", "S58", "S59"], 
  "rocks" : ["S10", "S41", "S42", "S43", "S44", "S56"],
  "other" : ["S03", "S04", "S06", "S12", "S16", "S18", "S25", "S27", "S28", "S37", "S38"]
};

var sites_key = {'S46': 'on trail', 'S36': 'on trail', 'S42': 'rocks', 'S31': 'on trail', 'S25': 'other', 'S16': 'other', 'S57': 'fire', 'S56': 'rocks', 'S55': 'water', 'S54': 'plant', 'S53': 'on trail', 'S52': 'water', 'S51': 'plant', 'S50': 'on trail', 'S15': 'on trail', 'S14': 'water', 'S59': 'plant', 'S58': 'plant', 'S19': 'plant', 'S18': 'other', 'S39': 'plant', 'S6': 'other', 'S13': 'water', 'S34': 'plant', 'S11': 'on trail', 'S10': 'rocks', 'S17': 'on trail', 'S30': 'on trail', 'S33': 'plant', 'S32': 'plant', 'S38': 'other', 'S22': 'fire', 'S23': 'fire', 'S20': 'fire', 'S47': 'plant', 'S26': 'on trail', 'S41': 'rocks', 'S24': 'plant', 'S43': 'rocks', 'S28': 'other', 'S29': 'plant', 'S62': 'fire', 'S48': 'water', 'S60': 'fire', 'S61': 'fire', 'S8': 'fire', 'S9': 'plant', 'S45': 'plant', 'S44': 'rocks', 'S1': 'plant', 'S2': 'on trail', 'S3': 'other', 'S4': 'other', 'S5': 'on trail', 'S49': 'water', 'S7': 'fire', 'S35': 'on trail', 'S21': 'fire', 'S12': 'other', 'S40': 'on trail', 'S37': 'other', 'S27': 'other'};

var samples_to_collection = {'S20': 'C7', 'S9': 'C3', 'S8': 'C3', 'S24': 'C6', 'S3': 'C1', 'S2': 'C1', 'S1': 'C1', 'S25': 'C6', 'S7': 'C3', 'S6': 'C2', 'S5': 'C2', 'S4': 'C2', 'S57': 'C21', 'S56': 'C12', 'S55': 'C15', 'S54': 'C15', 'S53': 'C15', 'S52': 'C14', 'S51': 'C14', 'S50': 'C14', 'S15': 'C5', 'S14': 'C5', 'S59': 'C21', 'S58': 'C21', 'S19': 'C10', 'S18': 'C10', 'S39': 'C11', 'S38': 'C11', 'S35': 'C20', 'S48': 'C22', 'S37': 'C11', 'S36': 'C11', 'S31': 'C19', 'S30': 'C18', 'S33': 'C19', 'S32': 'C18', 'S10': 'C4', 'S12': 'C4', 'S44': 'C17', 'S45': 'C16', 'S46': 'C16', 'S47': 'C16', 'S40': 'C13', 'S41': 'C13', 'S42': 'C17', 'S43': 'C17', 'S28': 'C20', 'S29': 'C20', 'S62': 'C21', 'S49': 'C22', 'S60': 'C21', 'S61': 'C21', 'S22': 'C7', 'S23': 'C7', 'S17': 'C10', 'S13': 'C5', 'S21': 'C7', 'S16': 'C5', 'S34': 'C18', 'S26': 'C6', 'S11': 'C4', 'S27': 'C6'};

var collection_to_samples = {"C1": ["S1", "S2", "S3"], 
"C2": ["S4", "S5", "S6"], 
"C3": ["S7", "S8", "S9"],
"C4": ["S10", "S11", "S12"],
"C5": ["S13", "S14", "S15", "S16"],
"C6": ["S24", "S25", "S26", "S27"],
"C7": ["S20", "S21", "S22", "S23"],
"C10": ["S17", "S18", "S19"],
"C11": ["S36", "S37", "S38", "S39"],
"C12": ["S56"],
"C13": ["S40", "S41"],
"C14": ["S50", "S51", "S52"],
"C15": ["S53", "S54", "S55"],
"C16": ["S45", "S46", "S47"],
"C17": ["S42", "S43", "S44"],
"C18": ["S30", "S32", "S34"],
"C19": ["S31", "S33"],
"C20": ["S28", "S29", "S35"],
"C21": ["S57", "S58", "S59", "S60", "S61", "S62"],
"C22": ["S48", "S49"]}
;

function addRelatedViz (rel_d) {
	
	var link_list = d3.select("#related").append("ul");

	var link_item = link_list.append("li")
	.text("Sample-centric plots: ");

	for (s_idx in rel_d["s"]) {
		// sample level stuff
		
		var link_item = link_list.append("li");
		var s_num = rel_d["s"][s_idx]
		
		console.log(s_num);
		if(s_num.toString()[0]=="S") {
			s_num = parseFloat(s_num.substr(1));
		}
	
		link_item.append("a")
		.attr("href", "./ClusteredSpecies.html?s=" + s_num.toString())
		.text("S" + s_num.toString() + ": Species abundance by phylum");

		link_item = link_list.append("li");

		link_item.append("a")
		.attr("href", "./CircleHierarchy.html?s=" + s_num.toString())
		.text("S" + s_num.toString() + ": Taxonomic hierarchy");
	}
	
	
	var link_list = d3.select("#related").append("ul");

	var link_item = link_list.append("li")
	.text("Collection-level plots:");
	
	for (c_idx in rel_d["c"]) {
		// collection level stuff

		c_num = rel_d["c"][c_idx];
		if(c_num.toString()[0]=="C") {
			c_num = parseFloat(c_num.substr(1));
		}
		
		link_item = link_list.append("li");
	
		link_item.append("a")
		.attr("href", "./NetworkCollection.html?c=" + c_num.toString())
		.text("C" + c_num.toString() + ": Network diversity");
	}

		// representative bacteria
	
		// var link_list = d3.select("#related").append("ul");
// 
// 		var link_item = link_list.append("li")
// 		.text("Prevalent bacteria in this sample:");
// 		for (bacteria in top_related) {
// 			link_item = link_list.append("li");
// 	
// 			link_item.append("a")
// 			.attr("href", "./#")
// 			.text("TO ADD:BACTERIA THINGS");
// 		}
	//}
}




