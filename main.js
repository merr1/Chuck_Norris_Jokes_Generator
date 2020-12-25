const button = document.getElementsByName("button");
const norris = document.getElementById("norris");
var paragraph = document.getElementById("joke");
function meri() {
  norris.classList.toggle("rotate");
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((data) => {
      var jokes = data.value;
      paragraph.innerHTML = jokes;
    });
}
