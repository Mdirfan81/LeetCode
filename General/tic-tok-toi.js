let board = [
  ["0", "-", "X"],
  ["-", "0", "-"],
  ["-", "X", "0"],
];
console.log(ticTokToi(board, "X"));
console.log(ticTokToi(board, "0"));
function ticTokToi(board, letter) {
  let rowAnswer =
    rowCheck(board[0], letter) ||
    rowCheck(board[1], letter) ||
    rowCheck(board[2], letter);

  let colAnswer =
    colCheck(board, 0, letter) ||
    colCheck(board, 1, letter) ||
    colCheck(board, 2, letter);

  let diagonalCheckLeftToRight =
    board[0][0] == letter && board[1][1] == letter && board[2][2] == letter;

  let diagonalCheckRightToLeft =
    board[0][2] == letter && board[1][1] == letter && board[2][0] == letter;

  return (
    rowAnswer ||
    colAnswer ||
    diagonalCheckLeftToRight ||
    diagonalCheckRightToLeft
  );
}

function rowCheck(arr, letter) {
  for (let i = 0; i < 3; i++) {
    if (arr[i] != letter) {
      return false;
    }
  }
  return true;
}

function colCheck(arr, colIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (arr[i][colIndex] != letter) {
      return false;
    }
  }
  return true;
}
