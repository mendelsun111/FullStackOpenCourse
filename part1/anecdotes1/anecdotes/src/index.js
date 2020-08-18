import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({anecdotes, setSelected, selected, setVoted, voted}) => {
  let anecL = anecdotes.length;
  let random = ()=> Math.floor(Math.random()*(anecL));
  let maxAnecdote = () => {
    let max = 0;
    let index=0;
    for(let i=0; i<anecL; i++){
      if(voted[i]>max){
        max=voted[i];
        index=i;
      }
    }
    return index;
  }

  return (
    <div>
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected]}</p>
      <p> has {voted[selected]} votes</p>
      <button onClick={()=>
      {voted[selected]+=1
        return (
        setVoted(voted))}}>vote</button>
      <button onClick={()=>setSelected(random())}>next anecdotes</button>
      <p>Anecdote with most votes </p>
      <p>{anecdotes[maxAnecdote()]}</p>
      <p>has {voted[maxAnecdote()]} votes</p>

    </div>
  )
}


const App = (props) => {
  const sizeArray = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const newArray = [...sizeArray];
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(newArray);
  console.log(voted)


  return (
    <div>
      <Button anecdotes={anecdotes} setSelected={setSelected} selected={selected} setVoted={setVoted} voted={voted}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,

  document.getElementById('root')
)