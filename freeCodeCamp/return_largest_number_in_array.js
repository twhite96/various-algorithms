// * Return Largest Numbers in Arrays

/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. */

function largestOfFour(arr) {
  // You can do this!

  var results = [];

  for (var i = 0; i < arr.length; i++) {
    var largeNum = 0;

    for (var n = 0; n < arr[i].length; n++) {
      if (arr[i][n] > largeNum) {
        largeNum = arr[i][n];
      }
    }
    results[i] = largeNum;
  }
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
