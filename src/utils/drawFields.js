function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const drawFields = (number, board) => {
  let randomRow;
  let randomColumn;
  let drawedBoard = [...board];
  for (let i = 0; i < number; i += 1) {
    randomRow = getRandomInt(0, board.length);
    randomColumn = getRandomInt(0, board[0].length);
    drawedBoard[randomRow][randomColumn] = 1;
  }
  return drawedBoard;
};

export default drawFields;
