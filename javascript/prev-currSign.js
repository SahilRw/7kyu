// Count how often sign changes in array.
// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

// catchSignChange(arr) == 2;

// my solution
function catchSignChange(arr) {
  // initialize the count to 0
  let count = 0;

  // loop over the array
  for (let i = 1; i < arr.length; i++) {
    // check if curr num is positive and previous num is non-positive
    // or if curr num is negative and prev num is non-negative
    if ((arr[i - 1] < 0 && arr[i] >= 0) || (arr[i - 1] >= 0 && arr[i] < 0)) {
      // increment count
      count++;
    }
  }
  //   return the count after loop
  return count;
}
