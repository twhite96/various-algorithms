function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  let ana1 = {};
  let ana2 = {};

  for (let val of str1) {
    ana1[val] = (ana1[val] || 0) + 1;
  }
  for (let val of str2) {
    ana2[val] = (ana2[val] || 0) + 1;
  }
  for (let key in ana1) {
    if (!(key in ana2)) {
      return false;
    }
    if (ana2[key] !== ana1[key]) {
      return false;
    }
  }
  return true;
}
