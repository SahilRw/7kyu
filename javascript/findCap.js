// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// my solution
var capitals = function (word) {
    // declare an empty array to store values
	const indexArr = []
  
    // looping over the argument(word)
    for (let i = 0; i < word.length; i++){
        // check whether the letter is uppercase
        if(word[i] === word[i].toUpperCase()) {
        // push the letter to the array
        indexArr.push(i)
    }
  }

  return indexArr
};