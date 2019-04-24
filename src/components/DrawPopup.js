import React, { useState } from "react";

const InitPopup = ({ closeFn, actionFn, board }) => {
  const [numberOfFields, setNumberOfFields] = useState(50);

  const draw = () => {
    actionFn(numberOfFields, board);
    closeFn();
  };

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        background: "rgba(220,220,220,0.8)",
        width: "100vw",
        height: "100vh"
      }}
      onClick={closeFn}
    >
      <div
        className="pa3 flex flex-column bg-white items-center justify-center"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <form className="flex flex-column">
          <label className="pa2">Number of fields to draw</label>
          <input
            className="pa2"
            type="text"
            name="rows"
            value={numberOfFields}
            onChange={e => setNumberOfFields(e.target.value)}
          />
          <input
            className="pa2 ma2 bg-blue white bn br3"
            type="submit"
            value="init"
            onClick={draw}
          />
        </form>
      </div>
    </div>
  );
};

export default InitPopup;
