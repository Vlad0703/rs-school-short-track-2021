function removeKFromList(l, k) {
  if (l.includes(k)) {
    l.splice(l.indexOf(k), 1);
    return removeKFromList(l, k);
  }
  return l;
}

module.exports = removeKFromList;
