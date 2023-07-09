// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

// my solution
function noOdds( values ){
//   let arr = [];
//   for(let i = 0; i<values.length; i++){
//     if(values[i] % 2 === 0){
//       arr.push(values[i])
//     }
//   }
//   return arr
  return values.filter(val => val % 2 === 0)
}