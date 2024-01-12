// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// my solution
function getMissingElement(arr) {
  // sum of all int from 0 - 9 => (9 * 10 / 2) => 45
  // calculate sum of given array and subtract from actual sum(45)
  return arr.reduce((acc, sum) => acc - sum, 45);
}

// alternate solution
function getMissingElement(arr) {
  // sort the array in ascending order
  const sortArr = arr.sort();

  //   loop over the array
  for (let i = 0; i <= arr.length; i++) {
    // if element at array index !== index return the index
    if (sortArr[i] !== i) {
      return i;
    }
  }
}
