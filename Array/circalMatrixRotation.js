// Rotate a matrix by 90 degree in clockwise direction
// without using any extra space
// Input
// Input:
// 1 2 3
// 4 5 6
// 7 8 9
// Output:
// 7 4 1
// 8 5 2
// 9 6 3
circularMatrixRotation();
function circularMatrixRotation() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let len = matrix.length - 1;
  for (let i = len; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  for (let i = 0; i <= len; i++) {
    matrix[i].reverse();
  }
  console.log(matrix);
}
