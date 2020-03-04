function destroyer(arr) {
  // Remove all the values
  // coerce the arguments object into a true Array
  // so we can use an Array method on it
  let args = [...arguments];

  // if elements in arr are not found in the args array, filter them out and return arr
  arr = arr.filter((index => !args.includes(index)))
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
