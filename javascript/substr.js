// Complete the function that takes an array of words.
// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:
// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// my solution
function nthChar(words) {
  return words.map((word, index) => word.charAt(index)).join("");
}

// alternate solution
function charAtIndex(words) {
  // initialize a string to store result
  let res = "";

  // loop over the words in the array
  for (let i = 0; i < words.length; i++) {
    // concatenate the words at the index with the respective character
    res += words[i].charAt(i);
  }

  // return the concatenated string
  return res;
}
