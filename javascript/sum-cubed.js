// Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined if any of the values aren't numbers.

// my solution
function cubeOdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // check if the current value is number
    if (typeof arr[i] !== "number") {
      return undefined;
    }

    // cube the number
    const cubed = arr[i] ** 3;

    // check if cubed number is odd
    if (cubed % 2 !== 0) {
      // add cubed number to sum
      sum += cubed;
    }
  }

  return sum;
}

// alternate solution
function cubeOddAlt(arr) {
  let result = arr
    .filter((x) => x % 2 !== 0)
    .map((x) => x ** 3)
    .reduce((a, b) => a + b, 0);

  return isNaN(result) ? undefined : result;
}
