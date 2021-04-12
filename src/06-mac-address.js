function isMAC48Address(n) {
  const num = n.split('-');
  let neg = true;
  for (let i = 0; i < num.length; i++) {
    const sub = num[i].split('');
    for (let j = 0; j < sub.length; j++) {
      if (!((sub[j].charCodeAt() >= 48 && sub[j].charCodeAt() <= 57)
      || (sub[j].charCodeAt() >= 65 && sub[j].charCodeAt() <= 70))) {
        neg = false;
      }
    }
  }
  return num.length === 6 && neg;
}
module.exports = isMAC48Address;
