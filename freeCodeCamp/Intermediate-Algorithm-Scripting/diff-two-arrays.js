function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  // find elements in arr1 that are not in arr2
  // find elements that are in arr2 that are not in arr1
  // concatenate them with .concat
  // return the new concatenated array
  newArr = arr1.filter(index => !arr2.includes(index))
               .concat(arr2.filter(index => !arr1.includes(index)));
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
