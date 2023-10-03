// prompt the user for a bill amount and tip rate
// compute the tip
// log both the tip and the total bill amount ot the console

const readline = require("readline-sync");

console.log("What is the bill?");
let bill = parseFloat(readline.question());

console.log("What is the tip percentage?");
let tipPercentage = parseFloat(readline.question());

let tipAmount = bill * (tipPercentage / 100);
let totalAmount = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}\nThe total is $${totalAmount.toFixed(2)}`);


// Launch School solution

let readlineSync = require("readline-sync");

let lsBill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage?\n")
);

let tip = bill * (percentage /100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

