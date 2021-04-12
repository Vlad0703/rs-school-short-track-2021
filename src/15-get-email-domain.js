function getEmailDomain(email) {
  let arr = email.split('@');
  return arr[arr.length - 1];
}

module.exports = getEmailDomain;
