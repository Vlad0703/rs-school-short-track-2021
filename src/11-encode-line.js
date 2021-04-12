function encodeLine(str) {
  let fin = '';
  let alph = {};
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (alph.hasOwnProperty(arr[i])) {
      alph[arr[i]] += 1;
    } else {
      alph[arr[i]] = 1;
    }
  }
  for (let prop in alph) {
    if (alph[prop] > 1) {
      fin += `${alph[prop]}`+`${prop}`;
    } else {
      fin += `${prop}`;
    }
  }
  return fin;
}

module.exports = encodeLine;
