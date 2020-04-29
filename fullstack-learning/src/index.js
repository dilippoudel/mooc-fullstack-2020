import React, { useState } from "react";
import ReactDOM from "react-dom";

// Button Component

const Button = ({ eventHandler, text }) => {
  return <button onClick={eventHandler}>{text}</button>;
};

// Stastics component

const Stastics = ({ good, neutral, bad, all }) => {
  if (!all) {
    return (
      <div>
        <h3>Stastics</h3>
        No feedback given
      </div>
    );
  } else
    return (
      <>
        <h3>Stastics</h3>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good-bad)/(all)}</td>
            </tr>
            <tr>
              <td>positive </td>
              <td>{(good/all)*100}</td>
            </tr>
          </tbody>
        </table>
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
