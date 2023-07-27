/*Given a text, return how many vowels it has. */

function number_vowels() {
  let area = document.getElementById("text").value;
  const finalResult = document.getElementById("result");

  let title = "Number of Vowels: ";

  let vowels_match = area.match(/[aeiou]/gi);
  let vowelsCount = vowels_match ? vowels_match.length : 0;

  return (finalResult.innerHTML =
    "<strong>" + title + vowelsCount + "</strong>");
}

//Function to reset the game, or to refresh the web
const restart = document.getElementById("restart");

restart.addEventListener("click", function () {
  location.reload();
});

//To force the scrollTop after refreshing with location.reload()
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
