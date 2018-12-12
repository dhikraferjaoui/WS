/*
 * change #anchor when searching
 */
function search() {
  var artist = document.getElementById('myInput').value;
  artist = artist.split(" ").join("_");
  window.location.href = "athlete.html#" + artist;
  load_athlete();
}

/* from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
 * add listener to the search button
 */
function enterButton() {
  var input = document.getElementById("myInput");
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("submit-btn").click();
    }
  });
}
