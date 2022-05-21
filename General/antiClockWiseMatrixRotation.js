// Given a square matrix,
// turn it by 90 degrees in anti-clockwise
// direction without using any extra space.
// Input:
// Matrix:
//  1  2  3
//  4  5  6
//  7  8  9
// Output:
//  3  6  9
//  2  5  8
//  1  4  7
// The given matrix is rotated by 90 degree
// in anti-clockwise direction
antiClock();
function antiClock() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let len = matrix.length;
  console.log(len);
  for (let i in matrix) {
    matrix[i].reverse();
  }
  //   console.log(matrix);
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log("result", matrix);
}
