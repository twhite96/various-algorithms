// * Chunky Monkey

/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var oldArray = arr.length / size;
  for (var i = 0; i < oldArray; i++) {
    var array = arr.splice(0, size);
    newArray.push(array);
  }

  return newArray;

  // Break it up.

}

chunkArrayInGroups([ 0, 1, 2, 3, 4, 5], 2);
