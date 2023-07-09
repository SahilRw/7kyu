// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// my solution
function minMax(arr){
  let lowestNum = Math.min(...arr)
  let highestNum = Math.max(...arr)
  return [lowestNum, highestNum]
}