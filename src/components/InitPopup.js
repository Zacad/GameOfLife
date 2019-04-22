import React, { useState } from "react";

const InitPopup = ({ content = "", buttonValue = "", closeFn, actionFn }) => {
  const [rows, setRows] = useState(50);
  const [columns, setColumns] = useState(50);

  const init = () => {
    actionFn(rows, columns);
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
      onClick={/*closeFn*/ () => true}
    >
      <div
        className="pa3 flex flex-column bg-white items-center justify-center"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <form className="flex flex-column">
          <label className="pa2">Number of rows</label>
          <input
            className="pa2"
            type="text"
            name="rows"
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
          <label className="pa2">Number of columns</label>
          <input
            className="pa2"
            type="text"
            name="columns"
            value={columns}
            onChange={e => setColumns(e.target.value)}
          />
          <input
            className="pa2 ma2 bg-blue white bn br3"
            type="submit"
            value="init"
            onClick={init}
          />
        </form>
      </div>
    </div>
  );
};

export default InitPopup;
