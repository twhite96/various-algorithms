// Condense Arrays with reduce, freeCodeCamp

/* Use the reduce method to sum all the values in array and assign it to singleVal. */

var array = [4, 5, 6, 7, 8];

// Only change code below this line.

var singleVal = array.reduce(function (previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);

// Only change code above this line.

(function () {
  return singleVal;
})();
