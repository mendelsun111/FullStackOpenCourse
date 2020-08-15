import React from 'react'
import ReactDOM from 'react-dom'
//header, content, total

const Header =(props)=>{
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}
const Content = (props)=>{
  return (
    <div>
      <Part part="Fundamentals of React" exercise="10" />
      <Part part="Using props to pass data" exercise="7" />
      <Part part="Stat of a component" exercise="14"/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1+props.exercises2+props.exercises3}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))