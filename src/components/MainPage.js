import React from "react";

export default function MainPage(props) {
  const btn = {
    width: "138px",
    fontSize: "20px",
    height: "36px"
  };

  return (
    <div>
      <h2>Bia</h2>
      <button style={btn} onClick={props.toggle} className="button">
        Play Again
      </button>
    </div>
  );
}
