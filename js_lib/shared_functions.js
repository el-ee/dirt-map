


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




var sites_key = {'S46': 'on trail', 'S36': 'on trail', 'S42': 'rocks', 'S31': 'on trail', 'S25': 'other', 'S16': 'other', 'S57': 'fire', 'S56': 'rocks', 'S55': 'water', 'S54': 'plant', 'S53': 'on trail', 'S52': 'water', 'S51': 'plant', 'S50': 'on trail', 'S15': 'on trail', 'S14': 'water', 'S59': 'plant', 'S58': 'plant', 'S19': 'plant', 'S18': 'other', 'S39': 'plant', 'S6': 'other', 'S13': 'water', 'S34': 'plant', 'S11': 'on trail', 'S10': 'rocks', 'S17': 'on trail', 'S30': 'on trail', 'S33': 'plant', 'S32': 'plant', 'S38': 'other', 'S22': 'fire', 'S23': 'fire', 'S20': 'fire', 'S47': 'plant', 'S26': 'on trail', 'S41': 'rocks', 'S24': 'plant', 'S43': 'rocks', 'S28': 'other', 'S29': 'plant', 'S62': 'fire', 'S48': 'water', 'S60': 'fire', 'S61': 'fire', 'S8': 'fire', 'S9': 'plant', 'S45': 'plant', 'S44': 'rocks', 'S1': 'plant', 'S2': 'on trail', 'S3': 'other', 'S4': 'other', 'S5': 'on trail', 'S49': 'water', 'S7': 'fire', 'S35': 'on trail', 'S21': 'fire', 'S12': 'other', 'S40': 'on trail', 'S37': 'other', 'S27': 'other'};


var samples_to_collection = {};

var collection_to_samples = {};

function addRelatedViz (type, number, top_related) {
	
	if(type=="s") {
		// sample level stuff
	
		var link_list = d3.select("#related").append("ul");
	
		var link_item = link_list.append("li")
		.text("Sample-centric plots: ");
	
		var link_item = link_list.append("li");
	
		link_item.append("a")
		.attr("href", "./ClusteredSpecies.html?s=" + number.toString())
		.text("Clustered species distribution for S" + number.toString());

		link_item = link_list.append("li");

		link_item.append("a")
		.attr("href", "./CircleHierarchy.html?s=" + number.toString())
		.text("Taxonomic hierarchy for S" + number.toString());
	
		// collection level stuff

		var link_list = d3.select("#related").append("ul");
	
		var link_item = link_list.append("li")
		.text("Collection-level plots:");
		
		link_item = link_list.append("li");
	
		link_item.append("a")
		.attr("href", "./#")
		.text("TO ADD: NETWORK THINGS");

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
	}
}




