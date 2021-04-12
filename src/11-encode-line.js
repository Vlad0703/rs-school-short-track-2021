function encodeLine(str) {
  let fin = '';
  const alph = {};
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (typeof alph[arr[i]] === 'undefined') {
      alph[arr[i]] = 1;
    } else {
      alph[arr[i]] += 1;
    }
  }
  const en = Object.entries(alph);
  for (let i = 0; i < en.length; i++) {
    if (en[i][1] > 1) {
      fin += `${en[i][1]}${en[i][0]}`;
    } else {
      fin += `${en[i][0]}`;
    }
  }
  return fin;
}

module.exports = encodeLine;
