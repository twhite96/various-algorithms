// store unique values in a new array
// if the value of index i is the same as the value index x move index x over to the left as long as the values of i and j
//  are the same
// if they aren't move index i forward and replace it with value of index j

function countUniqueValues(arr) {
// if the length of the array is empty return 0
 if(arr.length === 0) return 0;
 // initialize empty index
 var i = 0;
 // loop over array
 for (let x = 0; x < arr.length; x++) {
   // if initial index does not equal the value of the comparison index
   // move initial index to the right
   if(arr[i] !== arr[x]) {
     i++
     // if initial index equals comparison index
     arr[i] = arr[x];
   }
   return arr[i] + 1;
 }
}

countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]);
