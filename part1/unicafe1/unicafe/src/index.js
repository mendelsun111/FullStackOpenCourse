import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({good, neutral, bad}) => {
  
  return (
    <div>
      <p>statistics</p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good-bad)/(good+bad+neutral)}</p>
      <p>positive {good/(good+bad+neutral)*100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <div>give feedback</div>
      <br/>
      <button onClick={()=>{setGood(good+1)}}>good</button>
      <button onClick={()=>{setNeutral(neutral+1)}}>neutral</button>
      <button onClick={()=>{setBad(bad+1)}}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)