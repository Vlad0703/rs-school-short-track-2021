function encodeLine(str) {
  const incom = str.split('');
  let fin = '';
  const en = [];
  for (let i = 0; i < incom.length; i++) {
    if (incom[i] !== incom[i - 1]) {
      en.push([incom[i], 1]);
    } else {
      en[en.length - 1][1] += 1;
    }
  }

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
