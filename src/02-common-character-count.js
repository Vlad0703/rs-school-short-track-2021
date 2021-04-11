function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let final = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        final += 1;
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return final;
}
module.exports = getCommonCharacterCount;
