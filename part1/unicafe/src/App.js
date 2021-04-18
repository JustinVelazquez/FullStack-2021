import React from 'react';
import { useState } from 'react';
import Button from './components/Button';
import Content from './components/Content';

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <h1> Give Feedback</h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addBad} text="bad" />
      <Button handleClick={addNeutral} text="neutral" />
      <br />
      <h2>Statistics</h2>
      <Content text="good: " count={good}/>
      <br />
      <Content text="bad: " count={bad} />
      <br />
      <Content text="neutral: " count={neutral} />
    </>
  );
};

export default App;
