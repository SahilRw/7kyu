// Description:
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// my solution
const minValue = (values) => +[...new Set(values)].sort().join("");
