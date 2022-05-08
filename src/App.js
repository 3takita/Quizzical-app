import "./styles.css";
import React from "react";
/*import {nanoid} from 'nanoid';*/
import CoverPage from "./components/CoverPage";
import MainPage from "./components/MainPage";
import data from "./components/data";

export default function App() {
  const [play, setPlay] = React.useState(true);
  const [ask, setAsk] = React.useState(data);

  /*Function that toggles cover & main pages*/
  function toggle() {
    setPlay((prevState) => !prevState);
  }

  const quizElements = ask.map((item) => {
    return (
      <MainPage
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
        play={play}
        toggle={toggle}
      />
    );
  });
  /*
  const playSetter = () => {
    setQuiz(oldState=>)
  }
    */

  return (
    <main className="main">
      <div className="grid-container">
        <div className="yellow-circle"></div>
        {play ? (
          <div className="each-answer">{quizElements}</div>
        ) : (
          <CoverPage toggle={toggle} />
        )}
        <div className="blu-circle"></div>
      </div>
    </main>
  );
}
