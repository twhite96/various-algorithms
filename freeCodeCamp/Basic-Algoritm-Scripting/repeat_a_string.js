// * Repeat a string repeat a string

/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. */

function repeat(str, num) {
  // repeat after me
  var newString = "";
  while (num > 0) {
    newString += str;
    num--;
  }
  return newString;
}

repeat("abc", 3);

