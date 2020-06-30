import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({part}) =>
{
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
    const total = course.parts.reduce((s, p) => {
    return s + p.exercises
  },0 )
  return (
    <div>
      <h1>{course.name}</h1>   
        <Content
          parts={course.parts}
        />
      <p>Number of exercises {total}</p> 
    </div>
  )
}


const App = () => {
  const courses = [
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

  return <Course course={course} />
}



ReactDOM.render(<App />, document.getElementById('root'))