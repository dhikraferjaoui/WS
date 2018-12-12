let athletes = getAllMedallist();
var input = document.getElementById("myInput");
new Awesomplete(input, {
  list: athletes,
  minChars: 1,
  autoFirst: true,
  maxItems: 15,
  filter: Awesomplete.FILTER_STARTSWITH
});


$( "#submit-btn" ).click(function() {
	var name = document.getElementById("myInput").value;
	console.log(name);
	var request = "SELECT DISTINCT ?name, ?image, ?description WHERE { ?event rdf:type dbo:OlympicEvent{?event dbo:bronzeMedalist ?human.} UNION {?event dbo:silverMedalist ?human.}  UNION {?event dbo:goldMedalist ?human.} ?human dbo:thumbnail ?image. ?human rdfs:label ?name.  FILTER langMatches(lang(?name),'en')  FILTER contains(?name,'"+name+"')  ?human dbo:abstract ?description. FILTER langMatches(lang(?description),'en')}";
	var result = String(get_url(request));
	var myObjectJSON = JSON.parse(httpGet(result));
	setImage(myObjectJSON.results.bindings[0].image.value);
	setName(myObjectJSON.results.bindings[0].name.value);
});

function setImage(imgsrc){
	document.getElementById("pic").src = imgsrc;
}

function setName(name){
	document.getElementById("name").value = name;
}
