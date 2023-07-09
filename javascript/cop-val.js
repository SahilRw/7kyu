// DESCRIPTION:
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
// The inputs will always be two positive integers between 2 and 99.

// my solution
function isCoprime(x, y) {
  function min(x, y){
    if(x < y){
      return x
    } return y
  }
  for(let i = 2; i <= min(x, y); i++){
    if(x % i == 0 && y % i == 0){
      return false
    } 
  } return true
}