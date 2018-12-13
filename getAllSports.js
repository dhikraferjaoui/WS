function get_url(request) {
  /*
   * request: the sparql request
   * return a string (url)
   */
  request = String(request);
  let url = "https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=";
  let end = "&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+"
  return (url+encodeURI(request)+end);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    //TODO : try to make an asynchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//retourne tous les couples (athlete,sport)
function getAllSports() {
var request = "SELECT ?athlete ?sport WHERE{SELECT ?athlete ?sport (count(*) as ?count) WHERE {?event rdf:type dbo:OlympicEvent{?event dbo:bronzeMedalist ?athlete .?athlete dbp:sport ?sport.}UNION {?event dbo:silverMedalist ?athlete.?athlete dbp:sport ?sport.}UNION {?event dbo:goldMedalist ?athlete.?athlete dbp:sport ?sport.}}GROUP BY ?athlete ?sport }ORDER BY DESC(?count)";
var result = String(get_url(request));
var jsonSport = JSON.parse(httpGet(result));
var sportsArray = [];
for(i =0; i<jsonSport.results.bindings.length;i++) {
	let sport= jsonSport.results.bindings[i].sport.value;
	let athlete= jsonSport.results.bindings[i].athlete.value;
	let result = {"sport" : sport,"athlete" : athlete};
	sportsArray.push(result);
};
return(sportsArray);
}

//filtre les donnees
function filterSports(filter){
  var sportArray = getAllSports().filter(obj =>obj.athlete.includes(filter));
	return sportArray[0].sport;
}