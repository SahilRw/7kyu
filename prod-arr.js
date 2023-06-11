// Description:
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// my solution
const productArray = (numbers) =>
  numbers.map((e) => numbers.reduce((prev, curr) => prev * curr) / e);
