import React from "react"

const AllCourse = ({course}) =>{
  
    const mapIt = () => {
     return course.map(part=>{
        
      return <div key={part.id}>{<Course course={part}/>}</div>
      })
    }
    console.log(mapIt())
    return <div>{mapIt()}</div>
  }
  
const Header = ({ course}) => {
    // console.log(course)
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
   
   
   
   
   const Course = ({course}) => {
     
     return (
   
       <div>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
       </div>
     )
   }

  export default AllCourse
  