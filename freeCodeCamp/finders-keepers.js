function findElement(arr, func) {
  // arr is the first argument to the function we need
  // func is the second argument we need
  // this modulo operation is the truth test: num => num % 2 === 0
  // num is already passed to the function
  let num = 0;
  for(let i = 0; i < arr.length; i++) {
    num = arr[i];
    if(func(num)) {
      return num;
    }
  }
  return undefined;
}
