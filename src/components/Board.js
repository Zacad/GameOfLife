import React from 'react'
import toggleField from '../utils/toggleField'

const Board = ({data, gameState, setBoard}) => {
  const toggleBg = (e) => {
    const newBoard = toggleField(e.target.id, data)
    setBoard(newBoard)
  }
  //console.log(data)
  return (
    <section className="nowrap">
    {
      data.map((row, idx) => {
        return (
          <div key={idx} id={idx}>
          {
             row.map((field, columnIdx) => {
              //console.log('field '+field)
              const bg = field === 0 ? 'bg-near-white' : 'bg-blue'
              //console.log(field.length)
              const classes = 'dib h1 w1 ma1 ' + bg
              return (
                    gameState === true ?
                    <div className={classes} id={data.length*idx+columnIdx} key={data.length*idx+columnIdx} row={idx} column={columnIdx} /> :
                    <div className={classes} id={data.length*idx+columnIdx}  key={data.length*idx+columnIdx} row={idx} column={columnIdx} onClick={toggleBg} />
              )

            })
          }
          </div>
        )
      })
    }
    </section>
  )
}

export default Board
