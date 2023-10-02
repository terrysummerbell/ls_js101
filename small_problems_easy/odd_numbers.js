// log all numbers from 1 to 99 inclusive to the console
// each number must be on a separate line

let number = 1;

while (number < 100) {
  if (!(number % 2 === 0)) {
    console.log(number);
  }
  number +=1;
}