// Filter arrays with filter, freeCodeCamp

/* Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change. */

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function (array) {
  return array < 6;
});

// Only change code above this line.

(function () {
  return newArray;
})();
