const toggleField = (fieldId, board) => {
  const row = Math.floor(fieldId / board.length)
  const column = fieldId % board.length
  const newBoard = [...board]
  newBoard[row][column] = newBoard[row][column] === 0 ? 1 : 0
  return newBoard
}

export default toggleField
