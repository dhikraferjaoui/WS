let athletes = getAllMedallist();
var input = document.getElementById("myInput");
new Awesomplete(input, {
  list: athletes,
  minChars: 1,
  autoFirst: true,
  maxItems: 15,
  filter: Awesomplete.FILTER_STARTSWITH
});
