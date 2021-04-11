function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let final = 0;
  for (elem in arr1) {
    for (el in arr2) {
      if (arr1[elem] === arr2[el]) {
        final += 1;
        arr2.splice(el, 1)
        break
      }
    }
  }
  return final;
}


module.exports = getCommonCharacterCount;
