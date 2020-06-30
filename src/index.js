import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({part}) =>
{
  console.log(part)
  return(
   <div>
     <p>
       {part.name} {part.exercises}
     </p>
   </div>
  )
}


const Content = ({parts}) => {
  return parts.map((p)=>{
   return <Part key={p.name} part={p}/>
  }) 
  
} 

const Course = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>   
        <Content
          parts={course.parts}
        />
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}
/*
  return (
    <div>
      <h1>{course.name}</h1>   
        <Content
          parts={course.parts}
        />
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
*/

ReactDOM.render(<App />, document.getElementById('root'))