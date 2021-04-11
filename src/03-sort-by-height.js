function sortByHeight(arr) {
  const minus = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === -1) {
      minus.unshift(i);
      arr.splice(i, 1);
    }
  }
  arr.sort((a, b) => a - b);
  minus.forEach((el) => arr.splice(el, 0, -1));
  return arr;
}
module.exports = sortByHeight;
