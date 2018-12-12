function main() {
  var anchor = window.location.hash.substr(1);
  $("#athlete-name").html(anchor.split("_").join(" "));
  $("#abstract").html("THIS IS GONNA BE THE ABSTRACT");
}
$(document).ready(main);
