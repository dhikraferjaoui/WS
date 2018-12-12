function main () {
  enterButton();
  load_athlete();
}

function load_athlete() {
  var anchor = window.location.hash.substr(1);
  $("#athlete-name").html(anchor.split("_").join(" "));
  //$("#abstract").html("THIS IS GONNA BE THE ABSTRACT");
  $("#sports").html(filterSports(anchor.split("_").join(" ")));
}
$(document).ready(main);
