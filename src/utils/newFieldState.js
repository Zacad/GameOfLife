
const newFieldState = (rowIdx, columnIdx, board) => {
  const columns = [-1,0,1]
  const rows = [-1,0,1]
  let counter = 0

  rows.forEach((row) => {
    columns.forEach((column) =>{
      if (
        !(rowIdx === rowIdx+row &&
          columnIdx === columnIdx + column) &&
          board[rowIdx+row] !== undefined &&
          board[rowIdx][columnIdx+column] !== undefined &&
          board[rowIdx+row][columnIdx+column] !== undefined
        ) {
        counter = board[rowIdx+row][columnIdx+column] === 1 ? counter += 1 : counter
      }
    })
  })
  //console.log('neighbors: '+counter)
  /*
  let newState = board[rowIdx][columnIdx] === 0 && counter === 3 ? 1 :
    board[rowIdx][columnIdx] === 1 && ( counter < 2 || counter > 3) ? 0 :
    board[rowIdx][columnIdx]
  */
  const actual = board[rowIdx][columnIdx]
  if ( actual === 0 && counter === 3) {
    return 1
  } else if (actual === 1 && ( counter < 2 || counter > 3)) {
    return 0
  } else {
    return actual
  }
  //console.log('state' + newState)
  //return newState

}

export default newFieldState
