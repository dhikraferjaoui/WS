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
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//retourne tous les couples (athlete,sport)
function getAllSports() {
var request = "select distinct ?athlete ?label where { {?athlete rdf:type yago:Medalist110305062. ?athlete dbp:sport ?sport. ?sport rdfs:label ?label. FILTER langMatches(lang(?label),'en')} UNION {?event dbo:bronzeMedalist ?athlete.?athlete dbp:sport ?sport.?sport rdfs:label ?label. FILTER langMatches(lang(?label),'en')} UNION {?event dbo:silverMedalist ?athlete.?athlete dbp:sport ?sport.?sport rdfs:label ?label. FILTER langMatches(lang(?label),'en')} UNION {?event dbo:goldMedalist ?athlete.?athlete dbp:sport ?sport.?sport rdfs:label ?label.FILTER langMatches(lang(?label),'en')}}";
console.log(request);
var result = String(get_url(request));
console.log(result);
console.log(httpGet(result));
var jsonSport = JSON.parse(httpGet(result));
var sportsArray = [];
for(i =0; i<jsonSport.results.bindings.length;i++) {
	let label= jsonSport.results.bindings[i].label.value;
	let athlete= jsonSport.results.bindings[i].athlete.value;
	let result = {"sport" : label,"athlete" : athlete};
	sportsArray.push(result);
};
return(sportsArray);
}

//filtre les donnees
function filterSports(filter){
	var sportArray = getAllSports().filter(obj =>obj.athlete.includes(filter));
	return sportArray;
}


