// jshint esversion: 7

//helper functions

let rollDie = () => {
  //return random number 1..6
  return Math.floor(Math.random() * 6) + 1;
};

let rollTarget = target => {
  let d1,
    d2,
    rollCount = 0,
    imgElem1,
    imgElem2;
  //clear XC div
  document.querySelectorAll("div")[1].innerHTML = "";

  //roll the dice
  do {
    d1 = rollDie();
    d2 = rollDie();
    rollCount++;
    console.log(d1 + " " + d2);
    //XC: add two new img elements to the web page
    imgElem1 = document.createElement("img");
    imgElem1.setAttribute("src", `dice/die${d1}.gif`);
    document.querySelectorAll("div")[1].appendChild(imgElem1);
    imgElem2 = document.createElement("img");
    imgElem2.setAttribute("src", `dice/die${d2}.gif`);
    document.querySelectorAll("div")[1].appendChild(imgElem2);
    document.querySelectorAll("div")[1].innerHTML += "<br>";
  } while (d1 + d2 != target);
  //update the images on the web page
  showDice(d1, d2);
  return rollCount;
};

let showDice = (d1, d2) => {
  let imgElems = document.querySelectorAll("img");
  imgElems[0].setAttribute("src", `dice/die${d1}.gif`);
  imgElems[1].setAttribute("src", `dice/die${d2}.gif`);
};

//1. define the event handler (call-back function that handles onclick event)
let clickHandler = function() {
  //get user input from web page
  let val = Number(document.querySelector("input").value);

  //display result on web page
  let rollCount = rollTarget(val);
  document.querySelector(
    "div"
  ).innerHTML = `You hit your number in ${rollCount} ${
    rollCount == 1 ? "roll!" : "rolls!"
  }`;
};

//2. register the handler after the DOM is complete

window.addEventListener("load", () => {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", clickHandler);
  //display two random dice images
  let n1 = rollDie(),
    n2 = rollDie();
  showDice(n1, n2);
});

/* older method, also works:

window.onload = function() {
    //select the button and register the handler
    document.querySelector("button").addEventListener("click", main);
};

*/
