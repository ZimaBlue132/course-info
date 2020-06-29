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
      <h1>{course.name}</h1>   
        <Content
          parts={course.parts}
        />
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))