const initBoard = (rows, columns) => {
  const board = []
  for (let i = 0; i < rows; i+=1) {
    board[i] = []
    for (let j=0; j < columns; j+=1 ) {
      board[i][j] = 0
    }
  }
  return board
}

export default initBoard
