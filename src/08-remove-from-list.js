function removeKFromList(l, k) {
  if (!l.includes(k)) {
    return l;
  } else {
    l.splice(l.indexOf(k), 1);
    return removeKFromList(l, k);
  }
}

module.exports = removeKFromList;
