import React from 'react'
import ReactDOM from 'react-dom'
//header, content, total

const Header =(props)=>{
  return (
    <>
      <h1>{props.course.name}</h1>
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
      <Part part={props.part.parts[0].name} exercise={props.part.parts[0].exercises} />
      <Part part={props.part.parts[1].name} exercise={props.part.parts[1].exercises} />
      <Part part={props.part.parts[2].name} exercise={props.part.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.part.parts[0].exercises+props.part.parts[1].exercises+props.part.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
       <Header course={course}/>
        <Content part={course}/>
        <Total part={course} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))