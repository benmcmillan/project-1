// jshint esversion: 7

//define helper functions here

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollToTarget(n) {
  if (n > 12 || n < 2) return 0;
  var rolls = 0,
    d1 = 0,
    d2 = 0;
  while (d1 + d2 !== n) {
    d1 = rollDie();
    d2 = rollDie();
    rolls++;
    console.log(`d1 = ${d1} d2 = ${d2}`);
  }
  showDice(d1, d2);
  return rolls;
}

function showDice(d1, d2) { // d1 and d2 face values
  d1img.src = `images/die${d1}.gif`;
  d2img.src = `images/die${d2}.gif`;
}

//Define a controller to handle the button click
let controller = function() {
  let target;
//get the target number from webpage
target = Number(document.querySelector("input").value);

//roll the target numbers and update images on webpage
let rolls = rollToTarget(target);

//display number of rolls on the web page
  let ending = rolls == 1 ? "!" : "s!";
  let resultStr = `You hit your number in ${rolls} roll` + ending;
  console.log(resultStr);
  resultElement.innerText = resultStr;
};

let d1img, d2img, resultElement;

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  // find result header
  resultElement = document.getElementById("result");

  //randomize die
  d1img = document.getElementById("d1");
  d2img = document.getElementById("d2");
  showDice(rollDie(),rollDie());

  //register the click handler for the button
  button.addEventListener("click", controller);
});
