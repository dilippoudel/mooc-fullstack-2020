import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({eventHandler, text}) => {
return(
    <button onClick={eventHandler}>{text}</button>
)
}


const App = () => {
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0);

const goodFeedback = () => {
    setGood(good+1)
}
const neutralFeedback = () => {
    setNeutral(neutral+1)
}
const badFeedback = () => {
    setBad(bad+1)
}
return(
    <div>
        <h2>give feedback</h2>
        <Button eventHandler={goodFeedback} text="good"/>
        <Button eventHandler={neutralFeedback} text="neutral"/>
        <Button eventHandler={badFeedback} text="bad"/>
        <h3>Stastifs</h3>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
    </div>
)
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)