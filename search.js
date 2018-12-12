function search() {
  var artist = document.getElementById('myInput').value;
  artist = artist.split(" ").join("_");
  window.location.href = "athlete.html#" + artist;
  main();
}
