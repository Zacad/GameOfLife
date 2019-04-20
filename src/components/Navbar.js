import React from 'react'

const Navbar = ({gameState, setGameState}) =>
{
  const toggleGameState = () => {
     gameState === true ? setGameState(false) : setGameState(true)


  }
  return (
    <nav className=" ba b--light-gray pa2 flex flex-row-l flex-column">
      <button className="ma2 pa2 br3 bn bg-blue white dim" onClick={toggleGameState}>Start/Stop game</button>
      <button className="ma2 pa2 br3 bn bg-blue white dim">Reset</button>
      <button className="ma2 pa2 br3 bn bg-blue white dim">Random Init</button>
    </nav>
  )
}

export default Navbar
