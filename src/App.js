import "./styles.css";
import React from "react";
/*import {nanoid} from 'nanoid';*/
import CoverPage from "./components/CoverPage";
import MainPage from "./components/MainPage";
//import data from "./components/data";

export default function App(props) {
  const [quiz, setQuiz] = React.useState(false);
  //const [ask, setAsk] = React.useState(data);

  /*Function that toggles cover & main pages*/
  function toggle() {
    setQuiz((prevState) => !prevState);
  }

  /*function generateQuiz() {
  id: nanoid(),
  question: props.question,
  answer: props.answer
}*/

  return (
    <main className="app">
      {quiz ? (
        <MainPage quiz={quiz} toggle={toggle} />
      ) : (
        <CoverPage toggle={toggle} />
      )}
    </main>
  );
}
