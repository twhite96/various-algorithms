function sumAll(arr) {
  var sums = [];

  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);

  for(let i = start; i <= end; i++) {
    sums.push(i);

    var summed = sums.reduce((x, y) => x + y);
  }
  return summed;
}

sumAll([1, 4]);
