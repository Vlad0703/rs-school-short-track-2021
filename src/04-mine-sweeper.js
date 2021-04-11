function minesweeper(matrix) {
  const newMatr = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j + 1 < matrix[i].length && matrix[i][j + 1]) {
        newMatr[i][j] += 1;
      }
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1]) {
        newMatr[i][j] += 1;
      }
      if (i + 1 < matrix.length && matrix[i + 1][j]) {
        newMatr[i][j] += 1;
      }
      if (i + 1 < matrix.length && j - 1 >= 0 && matrix[i + 1][j - 1]) {
        newMatr[i][j] += 1;
      }
      if (j - 1 >= 0 && matrix[i][j - 1]) {
        newMatr[i][j] += 1;
      }
      if (j - 1 >= 0 && i - 1 >= 0 && matrix[i - 1][j - 1]) {
        newMatr[i][j] += 1;
      }
      if (i - 1 >= 0 && matrix[i - 1][j]) {
        newMatr[i][j] += 1;
      }
      if (i - 1 >= 0 && j + 1 < matrix[i].length && matrix[i - 1][j + 1]) {
        newMatr[i][j] += 1;
      }
    }
  }
  return newMatr;
}
module.exports = minesweeper;
