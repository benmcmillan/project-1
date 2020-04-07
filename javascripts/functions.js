  // jshint esversion: 6
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
