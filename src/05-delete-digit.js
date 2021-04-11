function deleteDigit(n) {
  const arr = String(n).split('');
  const fin = [];
  for (let i = 0; i < arr.length; i++) {
    const prop = [...arr];
    prop.splice(i, 1);
    fin.push(Number(prop.join('')));
  }
  return fin.sort((a, b) => b - a)[0];
}
module.exports = deleteDigit;
