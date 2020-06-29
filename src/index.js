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

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <h1>{course}</h1>   
        <Content
          parts={[part1, part2, part3]}
        />
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))