// * Mutations

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
  var arr1 = arr[1].toLowerCase();
  var arr2 = arr[0].toLowerCase();

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0)
      return false;
    }

  return true;

}

mutation(["hello", "hey"]);
