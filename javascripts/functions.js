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

// Requirement 3-E XC
function alphaPosition(ch) {
  return ch.toLowerCase().charCodeAt()-96;
}
