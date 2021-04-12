function getMatrixElementsSum(matrix) {
  let sum;
  if (typeof matrix[0] === 'number') {
    sum = matrix.reduce((res, cur) => res + cur);
  } else {
    sum = matrix[0].reduce((res, cur) => res + cur);
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i - 1][j] > 0) {
          sum += matrix[i][j];
        }
      }
    }
  }
  return sum;
}
module.exports = getMatrixElementsSum;
