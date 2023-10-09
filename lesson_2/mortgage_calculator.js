/* get input from the user for:
** loan amount
** APR
** loan duration
*/

/* calculate the following:
** monthly interest rate
** loan duration in months
*/

const readlineSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to the mortgage calculator!");

while (true) {
  prompt("Please provide your loan amount in, British Pounds (£):");
  let loanAmount = readlineSync.question();

  while (invalidNumber(loanAmount)) {
    prompt("That's not a valid number, please add your loan amount in British Pounds");
    loanAmount = readlineSync.question();
  }

  prompt("Please provide the Annual Percentage Rate (APR):");
  let annualPercentageRate = readlineSync.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt("That's not a valid number, please the Annual Percentage Rate (APR)");
    annualPercentageRate = readlineSync.question();
  }

  prompt("Please provide the loan duration, in months:");
  let loanDurationMonths = readlineSync.question();

  while (invalidNumber(loanDurationMonths)) {
    prompt("That's not a valid number, please add your loan duration in months.");
    loanDurationMonths = readlineSync.question();
  }

  let monthlyInterestRate = (annualPercentageRate / 100) / 12;

  // mortgage calculator formula
  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  prompt(`Your monthly repayments on your loan are: £${parseFloat(monthlyPayment.toFixed(2))}`);

  prompt("Would you like another mortgage loan quote? Type 'y' or 'n'");
  let answer = readlineSync.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt("That is not a valid answer, please type 'y' or 'n'");
    answer = readlineSync.question().toLowerCase();
  }

  if (answer !== 'y') break;
}