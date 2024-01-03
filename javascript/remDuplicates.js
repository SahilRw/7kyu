// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

// my solution
function removeDuplicateWords (s) {
    // split the string into an array of words
    const word = s.split(' ')
    // initialize an array to store unique words
    const uniqueWord = []
  
    // loop through each word in the array
    for (let i = 0; i < word.length; i++){
        // check if the word is not already in the uniqueWord array
        if (!uniqueWord.includes(word[i])){
            // if not push the word in the array
            uniqueWord.push(word[i])
        }
    }
    
    // join the uniqueWord array back into string and return it
    return uniqueWord.join(' ')
}