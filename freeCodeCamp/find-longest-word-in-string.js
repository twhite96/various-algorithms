// Find the Longest Word in a String

/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWord(str) {
  var words = str.split(' ');

  var longest = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }

  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
