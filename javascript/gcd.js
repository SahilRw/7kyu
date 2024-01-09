// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// my solution
function mygcd(x, y) {
  // while loop
  while (y !== 0) {
    // store y in a temporary variable
    const temp = y;
    // update y to the remainder of division of x by y
    y = x % y;
    // update x to the previous value of y
    x = temp;
  }
  return x;
}
