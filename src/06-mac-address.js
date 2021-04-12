function isMAC48Address(n) {
  let num = n.split('-');
  let neg = true;
  for (let i = 0; i < num.length; i++) {
    console.log(num[i].split(''))
    num[i].split('').forEach((el) => {(el.charCodeAt() >= 48 && el.charCodeAt() <= 57) || (el.charCodeAt() >= 65 && el.charCodeAt() <= 70)  ? true : neg = false;})
  }
  return num.length === 6 && neg;
}
module.exports = isMAC48Address;
