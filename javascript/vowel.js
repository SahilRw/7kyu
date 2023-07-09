// Description:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// my solution
function shortcut(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!/[aeiou]/.test(char)) {
      result += char;
    }
  }
  return result;
}
