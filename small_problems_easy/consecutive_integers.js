// ask the user to enter an integer greater than 0
// then ask if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; index <= targetNum; num += 1) {
    total =+ num;
  }

  return total
}

function computeProduct(targetNum) {
  let total = 0

  for (let num = 1; num <= targetNum; num +=1) {
    total *= num;
  }

  return total;
}

const readlineSync = require("readline-sync");

prompt("Please enter an integer greater than 0:");
let integer = Number(readlineSync.question());

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let sumOrProduct = Number(readlineSync.question());




// prompt(`The ${} of the integers between ${} and ${} is ${}.`);




