// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// my solution
const binaryArrayToNumber = arr => {
  return arr.reduce((total, curr) => (total = total * 2 + curr), 0)
};