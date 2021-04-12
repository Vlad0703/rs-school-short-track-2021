function getSumOfDigits(n) {
  if (String(n).length === 1) {
    return n;
  } else {
    return getSumOfDigits(String(n).split('').reduce((sum, curr) => sum/1 + curr/1));
  }
}

module.exports = getSumOfDigits;
