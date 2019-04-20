import newFieldState from './newFieldState'

const nextGeneration = board => {

  return board.map((row,idx) => {
    return row.map((field, columnIdx) => {
      return newFieldState(idx, columnIdx, board)
    })
  })

}

export default nextGeneration
