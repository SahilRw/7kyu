// PUZZLE #1. SUM
// Assignment:
// Write a function named sum which performs addition in the way shown below
// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0

// my solution
function sum(x) {
    if (x === undefined){
      return 0;
    }
  
  return function next(y){
    if (y === undefined){
      return x;
    }
    
    return sum(x + y)
  }
}