// * Confirm the Ending

/* Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function end(str, target) {
  // "Never give up and good luck will find you." -- Falcor

  var length = target.length;
  var isEqual = target === str.substr(-length);
  return isEqual;

}

end("Bastian", "n");
