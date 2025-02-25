import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const AnecdoteMostValorated = ({votes, anecdotes}) => {
  const areThereVotes = votes.some(vote => vote !== 0);
  const mostValorated = Math.max(...votes);
  const maxIndex = votes.indexOf(mostValorated);

  if(!areThereVotes){
    return(<p>There are no votes yet</p>)
  }

  return(
    <>
    <h3>ANECDOTE WITH MOST VOTES</h3>
    <p>{anecdotes[maxIndex]}</p>
    </>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const vots = [0, 0, 0, 0, 0, 0, 0, 0];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(vots);


  const handleSelected = () => {
    setSelected((selected + 1) % anecdotes.length);
  }

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h3>ANECDOTE OF THE DAY</h3>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div>
        <Button onClick={handleVotes} text={"vote"}/>
        <Button onClick={handleSelected} text={"next anecdote"}/>
      </div>
      <AnecdoteMostValorated votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App