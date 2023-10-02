// take an integer as an argument
// check if the integer is an odd number
// return true if the integer is an odd number false if it is not


function isOdd(num) {
  if (!(num % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}

// Launch School Solution
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

isOdd();
console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));