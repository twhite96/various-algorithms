function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let val = {},
    i, size;

  for (i = 0, size = arr.length; i < size; i++) {
    if (val[arr[i]]) {
      return false;
    }

    val[arr[i]] = true;
  }

  return true;
}
