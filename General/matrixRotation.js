let matrix = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 0, 1],
];
// matrixRotation(matrix);
function matrixRotation(mat) {
  let N = mat.length;
  //   console.log("Length of the matrix", N);
  console.log(mat, "\n", "====>", N / 2);
  for (let x = 0; x < N / 2; x++) {
    for (let y = x; y < N - x - 1; y++) {
      let temp = mat[x][y];
      //   console.log("1 =>", temp, { x, y }, "\n");
      //1
      mat[x][y] = mat[y][N - 1 - x];
      //   console.log("1 =>", { x, y }, (mat[x][y], "==", mat[y][N - 1 - x]), "\n");
      //2
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];
      //   console.log(
      //     "2 =>",
      //     { x, y },
      //     (mat[y][N - 1 - x], "==", mat[N - 1 - x][N - 1 - y]),
      //     "\n"
      //   );
      //3
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];
      //   console.log(
      //     "3 =>",
      //     { x, y },
      //     (mat[N - 1 - x][N - 1 - y], " ==", mat[N - 1 - y][x]),
      //     "\n"
      //   );

      //4
      mat[N - 1 - y][x] = temp;
      //   console.log("4 =>", { x, y }, mat[N - 1 - y][x], "==", temp, "\n");
    }
  }

  console.log(mat);
}

rotateMatrixInAntiClockWise();
function rotateMatrixInAntiClockWise() {
  // let matrix = [
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 10, 11, 12],
  //   [13, 14, 15, 16],
  // ];
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let lengthArr = matrix.length - 1;
  // console.log("1", { matrix });

  for (let i = 0; i <= lengthArr; i++) {
    matrix[i].reverse();
  }
  // console.log("2", { matrix });
  for (let i = 0; i <= lengthArr; i++) {
    for (let j = i; j <= lengthArr; j++) {
      // console.log({ i, j });
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log("Result", matrix);
}

console.log(clockWise());
function clockWise() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  // console.log("1==>", matrix);
  let len = matrix.length - 1;

  for (let i = len; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      // console.log({ i, j });
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
    // console.log("Each J loop ==>", matrix);
  }
  for (let i = 0; i <= len; i++) {
    matrix[i].reverse();
  }

  return matrix;
}
