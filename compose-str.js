// Description:
// A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:
// s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"
// Let us build a new string strng of size (n + 1) x n in the following way:
// The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
// The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
// and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.

// my solution
function compose(s1, s2) {
  return s1
    .split("\n")
    .map(
      (e, i) =>
        e.slice(0, i + 1) +
        s2
          .split("\n")
          .reverse()
          [i].slice(0, -i || undefined)
    )
    .join("\n");
}
