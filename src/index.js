import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({part, exercise}) =>
{
  return(
   <div>
     <p>
       {part} {exercise}
     </p>
   </div>
  )
}

const Content = ({part1, part2, part3, exercises1, exercises2, exercises3 }) => {

  console.log({part1, part2, part3, exercises1, exercises2, exercises3 })

  return (
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
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
      <h1>{course}</h1>   
        <Content
        {...{part1}} {...{exercises1}}
        {...{part2}} {...{exercises2}}
        {...{part3}} {...{exercises3}}
        />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))