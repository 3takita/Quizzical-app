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
  /*function playSetter() {
    if(play) {
       <div>{quizElements}</div>
    } else {
      <div><CoverPage /></div>
    }
  }*/

  const quizElements = ask.map((item) => {
    return (
      <MainPage
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
        //play={play}
        //toggle={toggle}
      />
    );
  });
  /*{quiz?<MainPage toggle={toggle} /> : <CoverPage toggle={toggle} /> */

  return (
    <main className="main">
      <div className="grid-container">
        play?{quizElements}:{<CoverPage toggle={toggle} />}
      </div>
      <button>Play</button>
    </main>
  );
}
