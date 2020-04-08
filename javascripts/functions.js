  // jshint esversion: 6
//Requirement 3-B
  let arrAvg = (arr) => {
    let numbers = arr;
    let sum = 0,
      average;
    for (var i = 0; i < arr.length; i++) {
      sum += numbers[i];

    }
    average = sum / numbers.length;
    console.log(average);
  };


//NOT CLOSE
/*
let arr = [];
let largest = 0;
let arrMax = (arr) => {
  arr.forEach((value) => {

    if (largest < value)
      largest = value;
    console.log(largest);
  });
};
*/
//Requirement 3-C
let numbers =[];
let maxSoFar = [0];
let arrMax = (arr) => {
  arr.forEach((elem) =>{
    if (elem > maxSoFar){
      maxSoFar = elem;
    }
  });
  console.log(maxSoFar);
};






//Requirement 3-D
let sumEvens = (arr) => {
let totsum = 0;
  for (var val of arr) {
if(val%2 ==0) totsum += val;
  }
  console.log(totsum);
};
/*
In functions.js, write a
function named alphaPosition that accepts a character ch, and
returns a number representing ch's position in the alphabet.
Use function expression syntax (not arrow syntax), and use the
String method, charCodeAt(). Review the ASCII character
*/

function alphaPosition(ch) {
  return ch.toLowerCase().charCodeAt()-96;
}
