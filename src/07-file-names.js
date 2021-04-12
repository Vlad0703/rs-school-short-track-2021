function renameFiles(names) {
  let count = {};
  for (let i = 0; i < names.length; i++) {
    if (names.filter(word => word == names[i]).length > 1) {
      count[names[i]] = names.filter(word => word == names[i]).length - 1;
      for (let j = names.length - 1; j >= 0; j--) {
        if (names[i] == names[j] && count[names[i]] > 0) {
          names[j] += `(${count[names[i]]})`;
          count[names[i]] -= 1;
        }
      }
    } else {
      continue
    }
  }
  return names;
};

module.exports = renameFiles;
