/**
 * before starting: remember to copy the path for index.html into the browser, which means you can try
 * out your functions in the console.
 * you do not need to make any changes in index.html this is just to allow you to see your output
 * in the console
 */

/**
 * Task 1: create a function that will take in a name and say hello to that person in the console
 */
function sayName(name) {
  return `Hello ${name}`;
}

/**
 * Task 2: create a function that will take in a number, and say I can count to and the number in the console
 */

function iCanCountTo(number) {
  return `I can count to ${number}`;
}
/**
 * Task 3: create a function that takes in a word, and returns that word with " is a word" added to it
 */

function isAWord(word) {
  return `${word} is a word`;
}

/**
 * Task 4: create a function that will take in a number, and if it is higher than 5, say "high number" in the console
 */
// function isHigherThan5(number) {
//   if (number > 5) {
//     console.log("high number");
//   } else if (number < 5) {
//     console.log("low number");
//   } else {
//     return "even";
//   }
// }

function isHigherThan5(number) {
  return number > 5 ? "high number" : number < 5 ? "low number" : "even";
}

/**
 * Task 5: create a function that will take in a number, and if it is lower than 5, say "low number" in the console
 */

/**
 * Task 6: create a function that will take in a number, and if it is even, log even in the console, or log odd if not
 */
function isOddOrEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}

/**
 * Task 7: create a function that will loop from 0 to 10 and show each number in the console
 */
function countTo10() {
  for (i = 0; i <= 10; i++) {
    console.log(i);
  }
}
/**
 * Task 8: create a function that takes in a word, and will loop through each letter, logging it in the console
 */
function printLetterOfWord(word) {
  for (i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
}
/**
 * Task 9: create a function that will loop from 0 to 100, and log every even number
 */
function evenNumberIn100() {
  for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
/*
 * Task 10: complete the below function for this problem:
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts
 * the number of sheep present in the array (true means present).
 *
 * For example,
 *
 * [true,  true,  true,  false]
 * The correct answer would be 3.
 */
let sheepArray = [true, true, true, false];

function countSheep(sheepArray) {
  let sheep = 0;
  for (i = 0; i < sheepArray.length; i++) {
    if (sheepArray[i] === true) {
      sheep++;
    }
  }
  return sheep;
}

// function takes in 2 arguments. Multiply and returns result

const multiply = (a, b) => a * b;

let answer = multiply(2, 3);
console.log(answer); // 6

// make a function called timesTen, use multiply function

const timesTen = (num) => multiply(num, 10);

console.log(timesTen(5));
