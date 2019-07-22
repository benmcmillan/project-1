//jshint esversion: 8

//define a Dice class, properties and methods
class Dice {
  constructor(sides) {
    //Instance properties must be defined inside of class methods:
    this.URL_prefix = "http://dave-reed.com/book3e/Images/";
    this.sides = sides;
  }

  //define a method using shorthand syntax
  rollDie() {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  rollDoubles(n) {
    //roll two dice until you hit double n's
    //return the number of rolls
  }

  getURL(n) {
    //return the URL for an n-dot die
    return this.URL_prefix + "die" + n + ".gif";
  }
}

//top-level function
let diceTest = function(n) {
  let dice = new Dice(6);
  console.log(dice.rollDie());
  console.log(dice.getURL(1));
  //console.log(dice.rollDoubles(n))
};
