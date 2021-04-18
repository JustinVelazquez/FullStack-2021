import React, { useState } from 'react';
import Button from './components/Button'

const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [selected, setSelected] = useState(0);
  const [scores, setScores] =  useState(new Uint8Array(anecdotes.length))
  const [mostVoted, setMostVoted] = useState(0)

  const handleClick = () => {
    let randomAncedote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAncedote)
    }

    const handleVoteClick = () => {
        const copy = [...scores]
        copy[selected] += 1
        setScores(copy)
     if(scores[selected] > scores[mostVoted]) {
         setMostVoted(selected)
     } 
    }
 



   

  return (
    <div>
      <h1>Ancedote of the Day</h1>
      {anecdotes[selected]}
      <br />
      has {scores[selected]} votes
      <br />
      <Button text='vote' handleClick={handleVoteClick} />
      <Button handleClick={handleClick} text='Next ancedote'/>
      <br />
      <h1>Ancedote with most votes</h1> 
      {anecdotes[mostVoted]}
    </div>
  );
};

export default App;
