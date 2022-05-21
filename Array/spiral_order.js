// spiralOrder();
// function spiralOrder() {
//   let arr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//   ];

//   let topRow = 0;
//   let leftCol = 0;
//   let rightCol = arr[0].length - 1;
//   let buttomRow = arr.length - 1;
//   console.log({ topRow, leftCol, rightCol, buttomRow });
//   let loop = true;
//   while (topRow < buttomRow && leftCol < rightCol) {
//     for (let col = 0; col <= rightCol; col++) {
//       console.log(arr[topRow][col]);
//     }
//     topRow++;
//     for (let row = topRow; row <= buttomRow; row++) {
//       console.log({ row });
//       console.log(arr[row][rightCol]);
//     }
//     rightCol--;

//     if (topRow <= buttomRow) {
//       for (let col = rightCol; col >= 0; col--) {
//         console.log({ rightCol });
//         console.log(arr[buttomRow][col]);
//       }
//       buttomRow--;
//     }
//     if (leftCol <= rightCol) {
//       for (let row = buttomRow; row > topRow; row--) {
//         console.log(arr[row][leftCol]);
//       }
//       leftCol++;
//     }
//   }
// }

const selfSpiralOrder = () => {
  let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];
  let top = 0;
  let left = 0;
  let right = arr[0].length - 1;
  let buttomRow = arr.length - 1;

  while (top < buttomRow && left < right) {
    for (let col = 0; col <= right; col++) {
      console.log(arr[top][col]);
    }
    top++;
    for (let row = top; row <= buttomRow; row++) {
      console.log(arr[row][right]);
    }
    right--;

    if (top <= buttomRow) {
      for (let col = right; col >= 0; col--) {
        console.log(arr[buttomRow][col]);
      }
      buttomRow--;
    }
    if (left <= right) {
      for (let row = buttomRow; row > top; row--) {
        console.log(arr[row][left]);
      }
      left++;
    }
  }
};

selfSpiralOrder();
