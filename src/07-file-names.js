function renameFiles(names) {
  const coss = names;
  const count = {};
  for (let i = 0; i < coss.length; i++) {
    if (coss.filter((word) => word === coss[i]).length > 1) {
      count[coss[i]] = coss.filter((word) => word === coss[i]).length - 1;
      for (let j = coss.length - 1; j >= 0; j--) {
        if (coss[i] === coss[j] && count[coss[i]] > 0) {
          coss[j] += `(${count[coss[i]]})`;
          count[coss[i]] -= 1;
        }
      }
    }
  }
  return coss;
}

module.exports = renameFiles;

