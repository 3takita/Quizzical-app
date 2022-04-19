import React from "react";

export default function MainPage(props) {
  const btn = {
    width: "138px",
    fontSize: "20px",
    position: "fixed",
    height: "36px",
    position: "absolute",
    bottom: "10px",
    alignItem: "center",
    justifyContent: "center"
  };

  function ansas() {}

  return (
    <div>
      <h3>{props.question}</h3>
      <div className="grid">{props.answer}</div>
      <button style={btn} onClick={props.toggle} className="button">
        Play Again
      </button>
    </div>
  );
}
