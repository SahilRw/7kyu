// DESCRIPTION:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// my solution
function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter(num => num % 2 === 0)
}