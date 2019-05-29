/* Instructions: Write a method sum (sum_array in python, SumArray in C#) that
takes an array of numbers and returns the sum of the numbers.
These may be integers or decimals for Ruby and any instance of Num
for Haskell. The numbers can also be negative.
If the array does not contain any numbers then you should return 0. */


// Sum Numbers
function sum (numbers) {
  "use strict"
  let sumNums = numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
  // return reduced array
  return sumNums;
};

  /* use reduce to iterate over the values in the numbers array
  assign the reduce method to variable sumNums
  return added numbers
  choosing the reduce method allows for an easier read
  however this would be slower overall in large datasets
  because there is a callback involved
  however with small datasets, this is easier to read and functions well enough */
