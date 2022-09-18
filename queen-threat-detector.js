// Game one
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.table(generatedBoard);
console.log(queenThreat(generatedBoard));

// Game two
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));

function generateBoard(whiteQueen, blackQueen) {
  let board = []
  for(let r = 0; r < 8; r++) {
    let newRow = []
    for(let c = 0; c < 8; c++) {
      if(r == whiteQueen[0] && c == whiteQueen[1]) {
        newRow.push(1);
      } else if (r == blackQueen[0] && c == blackQueen[1]) {
        newRow.push(1)
      } else {
        newRow.push(0)
      }
    }
    board.push(newRow)
    newRow = []
  }
  return board
}

function queenThreat(generatedBoard) {
  if(checkUpDown(whiteQueen) || checkLeftRight(whiteQueen) || checkDiagonal(whiteQueen)) {
    return true;
  } else {
    return false;
  }
};

function checkUpDown(queenPosition) {
  for(let r = 0; r < 8; r++) {
    if(generatedBoard[r][queenPosition[1]] == 1 && r != queenPosition[0]) {
      return true;
    }
  }
  return false;
}

function checkLeftRight(queenPosition) {
  let count = 0
  for(num of generatedBoard[queenPosition[0]]) {
    if(num == 1) {
      count++
    }
  }
  if(count > 1) {
    return true;
  } else {
    return false;
  }
}

function checkDiagonal(queenPosition) {
  if(checkDiagonalLRDU(queenPosition) || checkDiagonalLRUD(queenPosition)){
    return true;
  } else {
    return false;
  }
}

// Sets the start position to check the grid diagonally from Left->Right/Up->Down
function checkDiagonalLRUD(queenPosition) {
  let startPosition = [];

  if(queenPosition[0] < queenPosition[1]) {
    startPosition = [0, queenPosition[1] - queenPosition[0]];
  } else {
    startPosition = [queenPosition[0] - queenPosition[1], 0];
  }

  let queenCount = 0;

  let r = startPosition[0];
  let c = startPosition[1];
  while(r < generatedBoard.length - 1 && c < generatedBoard.length - 1) {
    if(generatedBoard[r][c] == 1) {
      queenCount ++;
    }
    r++
    c++
  }

  if(queenCount > 1) {
    return true;
  } else {
    return false;
  }
}


// Sets the start position to check the grid diagonally from Left->Right/Down->Up
function checkDiagonalLRDU(queenPosition) {
  let startPosition = [];
  const rowOffset = (generatedBoard.length - 1) - queenPosition[0] // Gets the distance between the queens current row and the last row of the board.
  

  if(rowOffset < queenPosition[1]) {
    startPosition = [queenPosition[0] + rowOffset, queenPosition[1] - rowOffset] // Set the start position to the last row.
  } else {
    startPosition = [queenPosition[0] + queenPosition[1], 0] // Set the start position relative to the first column.
  }

  let queenCount = 0;

  let r = startPosition[0];
  let c = startPosition[1];
  while(r > -1 && c < generatedBoard.length -1) {
    if(generatedBoard[r][c] == 1) {
      queenCount++
    }
    r--;
    c++;
  }

  if(queenCount > 1) {
    return true;
  } else {
    return false;
  }
}

