// Compare two strings by comparing the sum of their values (ASCII character code).
// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

// my solution
function compare(s1, s2) {
    if (!s1 || s1.match(/null|nil|none/i)){
      s1 = ''
    }
  
    if (!s2 || s2.match(/null|nil|none/i)){
      s2 = ''
    }
  
  s1 = s1.toUpperCase()
  s2 = s2.toUpperCase()
  
  const sum1 = calcSum(s1)
  const sum2 = calcSum(s2)
  
  return sum1 === sum2
}

function calcSum(str) {
  let sum = 0;
  
  for (let i = 0; i < str.length; i++){
    const charCode = str.charCodeAt(i)
    
    if (charCode >= 65 && charCode <=90){
      sum += charCode
    } else {
      return 0
    }
  }
  
  return sum
}