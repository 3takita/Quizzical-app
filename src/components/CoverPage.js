import React from "react";

export default function CoverPage(props) {
  return (
    <div className="cover-container">
      <section className="section-wrap">
        <h1 className="kwizikal">Quizzical</h1>
        <h3 className="cover-h2">Some description if needed</h3>
        <button onClick={props.toggle} className="button">
          Start quiz
        </button>
      </section>
    </div>
  );
}
