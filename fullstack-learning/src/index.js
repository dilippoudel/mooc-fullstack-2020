import React, { useState } from "react";
import ReactDOM from "react-dom";

// Button Component

const Button = ({ eventHandler, text }) => {
  return <button onClick={eventHandler}>{text}</button>;
};

// Stastics component

const Stastics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <h3>Stastifs</h3>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>positive {(good / all) * 100}</p>
    </>
  );
};

// Parent- App Component
const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [all, setAll] = useState(0);

  const goodFeedback = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const neutralFeedback = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const badFeedback = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };
  return (
    <div>
      <h2>give feedback</h2>
      <Button eventHandler={goodFeedback} text="good" />
      <Button eventHandler={neutralFeedback} text="neutral" />
      <Button eventHandler={badFeedback} text="bad" />
      <Stastics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
