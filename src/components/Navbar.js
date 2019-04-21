import React, { useState } from 'react'
import initBoard from '../utils/initBoard'

const Navbar = ({gameState, setGameState, setBoard}) =>
{
  const toggleGameState = () => {
     gameState === true ? setGameState(false) : setGameState(true)
  }

  const resetBoard = () => {
      return !gameState ? setBoard(initBoard(40,40)) : ''
  }

  return (
    <nav className=" ba b--light-gray pa2 flex flex-row-l flex-column">
      <button className="ma2 pa2 br3 bn bg-blue white dim" onClick={toggleGameState}>Start/Stop game</button>
      <button className="ma2 pa2 br3 bn bg-blue white dim" onClick={ resetBoard }>Reset</button>
      <button className="ma2 pa2 br3 bn bg-blue white dim" onClick={ ()=> {} }>Random Init</button>
    </nav>
  )
}

export default Navbar
