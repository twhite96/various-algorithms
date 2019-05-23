function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
   // I want to make a copy of arr1 with slice
   let franky = arr2.slice();
   for(let i = 0; i < arr1.length; i++){
    franky.splice(n, 0, arr1[i]);
     n++;
   }
   return franky;
}
