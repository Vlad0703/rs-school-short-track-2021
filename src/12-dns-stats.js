function getDNSStats(domains) {
  let mas = [];
  let fin = {};
  domains.forEach((el) => {
    for (let i = el.split('.').length - 1; i >= 0; i--){
      let adr = el.split('.')
      mas.push(adr.splice(i, adr.length - i))
    }
  })
  for (let i = 0; i < mas.length; i++) {
    mas[i] = '.' + mas[i].reverse().join('.');
    if (fin.hasOwnProperty(mas[i])) {
      fin[mas[i]] += 1;
    } else {
      fin[mas[i]] = 1;
    }
  }
  return fin;
}

module.exports = getDNSStats;
