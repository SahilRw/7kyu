// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution
function reverseWords(str) {
  let array = [];
  
  let word = str.split(' ')
  
  for (let i = 0; i < word.length; i++){
    array.push(word[i].split('').reverse().join(''))
  }
  
  return array.join(' ')
}