// Description:
// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

// my solution
function logs(x, a, b) {
  const result = Math.log(a * b) / Math.log(x);
  return result;
}
