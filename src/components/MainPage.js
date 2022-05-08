import React from "react";

export default function MainPage(props) {
  const btn = {
    display: "flex",
    marginLeft: "28%",
    width: "138px",
    fontSize: "20px",
    height: "36px",
    position: "absolute" /*fixes btn*/,
    bottom: "10px",
    marginTop: "10%",
    justifyContent: "center"
  };

  /*function ansas() {}*/

  return (
    <main>
      <div className="main-page-cont">
        <section className="qna">
          <h3 className="questions">{props.question}</h3>
          <div className="answers">{props.answer}</div>
        </section>
        <button style={btn} onClick={props.toggle} className="button">
          {props.play ? "Play" : "Play Again"}
        </button>
      </div>
    </main>
  );
}
