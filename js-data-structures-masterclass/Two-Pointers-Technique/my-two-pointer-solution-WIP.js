// store unique values in a new array
// if the value of index i is the same as the value index x move index x over to the left as long as the values of i and j
//  are the same
// if they aren't move index i forward and replace it with value of index j

function countUniqueValues(arr) {
// if the length of the array is empty return 0
  if(arr.length === 0) return 0;
  let i = 0;

  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
     }
  }
  return i + 1;
}


countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]);
