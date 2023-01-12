// var, let and const

// let and const are block scoped
// const can't be redefined
// let can be redefined

// var is function scoped
// var don't use it is problematic

function greetManuel() {
  const greeting = 'Hello Manuel';

  return greeting;
}

const age = 13;

if (age > 12) {
  // this is called block scope
  var isTeenager = true;
  let isTeenager2 = true;
  const isTeenager3 = true;
}

// console.log(isTeenager); ==> this is going to be leaked
// console.log(isTeenager2); ==> this is not going to be leaked
// console.log(isTeenager3); ==> this is not going to be leaked

// hoisting

console.log(myNumber); // this is going to work but be very confusing
// console.log(myNumber2); // this is not going to work
// console.log(myNumber3); // this is not going to work

var myNumber = 1; // this is hoisted what is BAD!!!!!
let myNumber2 = 1; // this is not hoisted
const myNumber3 = 1; // this is not hoisted

console.log(run()); // functions are hoisted 😭

function run() {
  return 'i am running';
}
