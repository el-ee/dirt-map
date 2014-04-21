  // MAP TILES -- BASE
 
  var Stamen_TonerBackground = L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20
  });
 
  var Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  	subdomains: 'abcd',
  	minZoom: 3,
  	maxZoom: 16
  });
 
  var MapQuestOpen_Aerial = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
  	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
  	subdomains: '1234'
  });
 
  var Stamen_TerrainBackground = L.tileLayer('http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  	subdomains: 'abcd',
  	minZoom: 4,
  	maxZoom: 18
  });
 
  // MAP TILES -- OVERLAYS
 
  var OpenWeatherMap_Temperature = L.tileLayer('http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png', {
  	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
  	opacity: 0.5
  });
 
  var OpenWeatherMap_Clouds = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png', {
  	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
  	opacity: 0.5
  });
 
  var OpenWeatherMap_PrecipitationClassic = L.tileLayer('http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png', {
  	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
  	opacity: 0.5
  });
 
  var Stamen_TonerLabels = L.tileLayer('http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20
  });
 
  var Stamen_TonerLines = L.tileLayer('http://{s}.tile.stamen.com/toner-lines/{z}/{x}/{y}.png', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20
  });
  
  
  //
  // Set up base & overlay
  //
  
  var baseMaps = {
      "Toner": Stamen_TonerBackground,
      "Watercolor": Stamen_Watercolor,
      "Terrain": Stamen_TerrainBackground,
      "Aerial Satellite": MapQuestOpen_Aerial
  };

  var overlayMaps = {
      "City Names": Stamen_TonerLabels,
      "State Lines & Roads": Stamen_TonerLines,
      "Current Weather: Precipitation": OpenWeatherMap_PrecipitationClassic,
      "Current Weather: Cloud Cover": OpenWeatherMap_Clouds,
      "Current Weather: Temperatures": OpenWeatherMap_Temperature,
  };
  
  
  
  // 
  // GPX Tracks
  //
  
  var socal = 'http://el-ee.github.io/dirt-map/gpx/ca_southern_track_compressed.gpx'; 
  var central = 'http://el-ee.github.io/dirt-map/gpx/ca_central_track_compressed.gpx';
  var norcal = 'http://el-ee.github.io/dirt-map/gpx/ca_northern_track_compressed.gpx';
  