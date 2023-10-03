// ask the user for the length and width of a room in meters
// log the area of the room to the console in both square meters and swuare feet
// 1 square meter = 10.7639 square feet

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Enter the length of the room in meters:");
let myLength = parseFloat(readline.question());

prompt("Enter the width of the room in meters:");
let myWidth = parseFloat(readline.question());

let areaMeters = (myLength * myWidth).toFixed(2);
let areaFeet = (areaMeters * 10.7639).toFixed(2);

prompt(`The area of the room is ${areaMeters} (${areaFeet} square feet).`);


// Launch School solution

let readlineSync = require("readline-sync");

const SQMETERS_TO_FEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_FEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)})`
);


