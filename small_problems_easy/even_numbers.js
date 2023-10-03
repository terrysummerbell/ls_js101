// Log all even numbers from 1 to 99, inclusive, to the console
// each number must go on a separate line

for (let i = 2; i <= 99; i +=2) {
  console.log(i);
}

// Launch School solution

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}