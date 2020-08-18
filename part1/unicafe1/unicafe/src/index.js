import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value, extra}) => {

  return (
    <div>
      <p>{text} {value} {extra}</p>
    </div>
  )
}
const Statistics = ({good, neutral, bad})=>{
  if(good+neutral+bad ===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>statistics</p>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={good+neutral+bad}/>
      <Statistic text="average" value={(good-bad)/(good+bad+neutral)}/>
      <Statistic text="positive" value={good/(good+bad+neutral)*100} extra="%"/>
    </div>
  )
}

const Button = ({value, setValue, name}) => {
  return (
    <button onClick = { () => {setValue(value+1)}
    }>{name}</button>
  )
}

const Buttons = ({good, neutral, bad, setGood, setNeutral, setBad}) => {
  return (
    <div>
      <div>give feedback</div>
      <br/>
      
      <Button value={good} setValue={setGood} name="good"/>
      <Button value={neutral} setValue={setNeutral} name="neutral"/>
      <Button value={bad} setValue={setBad} name="bad"/>
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
      <Buttons good={good} bad={bad} neutral={neutral} setGood={setGood} setBad= {setBad} setNeutral = {setNeutral} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)