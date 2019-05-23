// * Title Case a Sentence

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  var arrayList = str.split(' ');

  for (var i = 0; i < arrayList.length; i++) {
    var eaElement = arrayList[i];
    var upperLetter = eaElement
      .charAt(0)
      .toUpperCase();
    eaElement = eaElement
      .slice(1, eaElement.length)
      .toLowerCase();
    arrayList[i] = upperLetter.concat(eaElement);
    console.log(arrayList);
  }
  str = arrayList.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
