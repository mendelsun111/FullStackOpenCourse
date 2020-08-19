import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({ course}) => {
  console.log(course)
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {

  const sum = course.parts.reduce((acc, current) => {
      return acc+current.exercises
      },0)
    return(
      <p>total of {sum} exercises</p>
    ) 
}

const Part = ({part}) => {
  console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((num,i)=>{
        return <Part key={i} part={course.parts[i]}/>
      })}
    </div>
  )
}

const AllCourse = ({course}) =>{
  
  const mapIt = () => {
   return course.map(part=>{
      
    return <div key={part.id}>{<Course course={part}/>}</div>
    })
  }
  console.log(mapIt())
  return <div>{mapIt()}</div>
}



const Course = ({course}) => {
  
  return (

    <div>
       <Header course={course} />
       <Content course={course} />
       <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <AllCourse course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
