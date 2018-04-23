'use strict'

// Export js file
module.exports = function (inputText) {
  // use regex to strip non numeric characters from input and replace with a
  // stripped version of the input in the phone variable
  inputText = inputText
    .replace(/[^0-9]/g, '')
    .replace(/^1/, '');
  let phone = null;

  // Test to see if the input string is equal to 11 and if the first character is
  // 1
  if (inputText.length === 11 && inputText.substring(0, 1) === '1') {
    // return number stripped of nom-numeric characters
    phone = inputText.substring(1, 11);
  } else if ((inputText.length === 10 && /[2-9]/.test(inputText[3]))
    ? inputText
    : null) {
    phone = inputText;
  }
  return {
    number: () => phone,
    toString: () => `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6, 10)}`,
    areaCode: () => phone.substring(0, 3)
  }
}
