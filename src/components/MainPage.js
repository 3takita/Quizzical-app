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
  //function that targets answers
  function ansas() {
    //let ans = '';
    let arr = [];
    for (let i = 0; i < props.answer.length; i++) {
      //ans += <p>{props.answer[i]}</p>
      arr.push(<p>{props.answer[i]}</p>);
    }
    return arr;
  }
  //styling for answers
  /*const kala = {
    display: 'flex',
    gap: '10px',
    backgroundColor: 'lightBlue',
    boxSizing: 'borderBox',
    boxRadius: '5px'
  }*/

  return (
    <main>
      <div className="main-page-cont">
        <section className="qna">
          <h3 className="questions">{props.question}</h3>
          <div /*style={kala}*/ className="answers">{ansas()}</div>
        </section>
        <button style={btn} onClick={props.toggle} className="button">
          {props.play ? "Play" : "Play Again"}
        </button>
      </div>
    </main>
  );
}
