// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

// my solution
function sumDigits(num) {
  const digits = Math.abs(num).toString().split("");

  return digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
