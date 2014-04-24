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


// general dictionaries to look up cross referencing between samples, sites, etc.
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
                             "C22": ["S48", "S49"]
                            };
                            
var collection_locs = {
    "C1": {"lat": 32.600931, "lon": -116.46035},
    "C2": {"lat": 32.84456, "lon": -116.41861},
    "C3": {"lat": 33.14939, "lon": -116.51625},
    "C4": {"lat": 33.77427, "lon": -116.67308},
    "C5": {"lat": 34.21759, "lon": -116.74373},
    "C6": {"lat": 34.30383, "lon": -117.38891},
    "C7": {"lat": 34.37353, "lon": -118.17756},
    "C8": {"lat": 34.89750, "lon": -118.45557},
    "C9": {"lat": 34.97941, "lon": -118.46860},
    "C10": {"lat": 35.656786, "lon": -118.043036},
    "C11": {"lat": 36.47489, "lon": -118.26043},
    "C12": {"lat": 36.57859, "lon": -118.29216},
    "C13": {"lat": 36.774036, "lon": -118.374961},
    "C14": {"lat": 37.28995, "lon": -118.87291},
    "C15": {"lat": 37.477764, "lon": -118.924242},
    "C16": {"lat": 38.292992, "lon": -119.638390},
    "C17": {"lat": 38.660290, "lon": -119.959700},
    "C18": {"lat": 39.52793, "lon": -120.56932},
    "C19": {"lat": 39.53738, "lon": -120.56664},
    "C20": {"lat": 40.259270, "lon": -121.340630},
    "C21": {"lat": 40.56108, "lon": -121.41912},
    "C22": {"lat": 41.84889, "lon": -123.21110}
};

var collection_miles = {
    
};

var collection_to_sample_nums = {"C1": ["1", "2", "3"],
                             "C2": ["4", "5", "6"],
                             "C3": ["7", "8", "9"],
                             "C4": ["10", "11", "12"],
                             "C5": ["13", "14", "15", "16"],
                             "C6": ["24", "25", "26", "27"],
                             "C7": ["20", "21", "22", "23"],
                             "C10": ["17", "18", "19"],
                             "C11": ["36", "37", "38", "39"],
                             "C12": ["56"],
                             "C13": ["40", "41"],
                             "C14": ["50", "51", "52"],
                             "C15": ["53", "54", "55"],
                             "C16": ["45", "46", "47"],
                             "C17": ["42", "43", "44"],
                             "C18": ["30", "32", "34"],
                             "C19": ["31", "33"],
                             "C20": ["28", "29", "35"],
                             "C21": ["57", "58", "59", "60", "61", "62"],
                             "C22": ["48", "49"]
                            };

var collection_descriptions = { "C1": "1 mile from US/MX border",
                                "C2": "The first real forest of the PCT, just before Mt. Laguna",
                                "C3": "The burn zone after Scissors Crossing",
                                "C4": "Near the junction with Devil’s Slide Trail",
                                "C5": "A spring flowing across the trail before big bear",
                                "C6": "Our campsite before Cajon Pass",
                                "C7": "On a roadwalk, technically off trail, avoiding Poodle Dog Bush in the old Station Fire burn zone",
                                "C8": "LOST IN THE MAIL - Windfarm along the CA aqueduct, near Cottonwood Creek Bridge",
                                "C9": "LOST IN THE MAIL - Canyon walls along a creek before Tehachapi",
                                "C10":"Just before Walker Pass",
                                "C11":"Just before entering Sequoia and Kings Canyon NP",
                                "C12":"Mt. Whitney",
                                "C13":"Kearsarge Pass",
                                "C14":"selden pass",
                                "C15":"squaw lake",
                                "C16":"near sonora pass, tree outcropping just before rocky mini-pass",
                                "C17":"trying to capture the colors of the rocks",
                                "C18":"just before sierra city, about to head down from the ridge",
                                "C19":"Barely past C18, coming down a hill in the sun",
                                "C20":"Before reaching chester, but after passing the PCT midpoint",
                                "C21":"Lassen NF burn zone, just beyond the park boundary",
                                "C22":"Boxed fern spring, after seiad valley"};
                                
                              
                            
var sample_descriptions = { "S1": "under bush",
                            "S2": "on trail",
                            "S3": "grassy field",
                            "S4": "beneath a dead tree",
                            "S5": "on trail",
                            "S6": "clearing in forest",
                            "S7": "ashes near a burned plant",
                            "S8": "on trail in burn zone",
                            "S9": "from under a juniper still growing in a burn zone",
                            "S10": "under rocks",
                            "S11": "on the trail",
                            "S12": "decaying log",
                            "S13": "spring, on trail",
                            "S14": "spring off trail",
                            "S15": "on trail away from spring",
                            "S16": "off trail away from spring",
                            "S17": "trail",
                            "S18": "hillside",
                            "S19": "yellow flower",
                            "S20": "topsoil",
                            "S21": "base of burned tree",
                            "S22": "crack in the road",
                            "S23": "clay ~3 inches deep",
                            "S24": "yellow flower",
                            "S25": "off trail",
                            "S26": "trail",
                            "S27": "campsite",
                            "S28": "very cold dirt from empty area to the side of the trail (and on SUCH a hot day)",
                            "S29": "plant with a fuzzy leaf",
                            "S30": "trail at site #1",
                            "S31": "trail at site #2",
                            "S32": "bean plant #1",
                            "S33": "bean plant #2",
                            "S34": "from near a manzanita?",
                            "S35": "on trail",
                            "S36": "on trail",
                            "S37": "hillside topsoil",
                            "S38": "hillside soil from 2 inches deep",
                            "S39": "under gnarly old foxtail pine",
                            "S40": "trail ",
                            "S41": "under a rock off trail",
                            "S42": "rocks 1",
                            "S43": "rocks 2",
                            "S44": "rocks 3",
                            "S45": "under little plants along the trail",
                            "S46": "trail",
                            "S47": "under a juniper tree",
                            "S48": "trail mud created by spring runoff",
                            "S49": "spring sludge",
                            "S50": "trail",
                            "S51": "flowers",
                            "S52": "snowmelt",
                            "S53": "trail",
                            "S54": "trees",
                            "S55": "lake outlet",
                            "S56": "summit",
                            "S57": "lassn nf burn zone",
                            "S58": "new plant in rocks",
                            "S59": "new plant in burnt stump",
                            "S60": "area with no new growth",
                            "S61": "lassen nf burn zone",
                            "S62": "orange/white ashes" };

function addRelatedViz(rel_d) {
	
	var link_list = d3.select("#related").append("ul");

	var link_item = link_list.append("li")
            .text("Sample-centric plots: ");

    var s_idx, c_idx;
    
    for (s_idx = 0; s_idx < rel_d["s"].length; s_idx = s_idx + 1) {
        
		// sample level stuff
		
		link_item = link_list.append("li");
		var s_num = rel_d["s"][s_idx];
		
		if (s_num.toString()[0] === "S") {
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
	
	
	link_list = d3.select("#related").append("ul");

	link_item = link_list.append("li")
        .text("Collection-level plots:");
	
    for (c_idx = 0; c_idx < rel_d["c"].length; c_idx = c_idx + 1) {

        // collection level stuff

        c_num = rel_d["c"][c_idx];
		if (c_num.toString()[0] === "C") {
			c_num = parseFloat(c_num.substr(1));
		}
		
		link_item = link_list.append("li");
	
		link_item.append("a")
            .attr("href", "./NetworkCollection.html?c=" + c_num.toString())
            .text("C" + c_num.toString() + ": Network diversity");
	}

    // representative bacteria
	
//    link_list = d3.select("#related").append("ul");
//
//    link_item = link_list.append("li")
//        .text("Prevalent bacteria in this sample:");
//    
//    for (bacteria in top_related) {
//        link_item = link_list.append("li");
//
//        link_item.append("a")
//            .attr("href", "./#")
//            .text("TO ADD:BACTERIA THINGS");
//    }

}




