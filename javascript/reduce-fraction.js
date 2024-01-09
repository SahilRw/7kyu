// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.
// Note: This is an introductory Kata for a series... coming soon!

// my solution
function reduce(fraction) {
  const [x, y] = fraction;

  // function to find gcd
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const commonDiv = gcd(x, y);

  // simplify the fraction by divising by commonDiv
  const reducedX = x / commonDiv;
  const reducedY = y / commonDiv;

  // return simplified fraction
  return [reducedX, reducedY];
}
