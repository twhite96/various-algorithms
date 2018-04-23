// Reverse a String, freeCodeCamp

/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str;
}

reverseString("hello");
