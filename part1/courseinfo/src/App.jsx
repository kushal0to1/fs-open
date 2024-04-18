/* eslint-disable react/prop-types */
import React from "react"

const Course = ({course}) => {
  console.log(course)
  const Header = (props) => {
    console.log(props.course)
    return (
      <h1>{props.course}</h1>

    )
  }

  const Content = (props) => {

    return (
      <div>

        {props.parts.map((p) => (
          <Part key={p.id} partName={p.name} exercises={p.exercises} />
        ))}

      </div>
    )
  }

  const Total = (props) => {
    let sum = 0;
    props.parts.forEach(p => {
      sum += p.exercises
    })
    return (
      <p>Number of exercises {sum}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.partName} {props.exercises}</p>
    )
  }
  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    {/* <Total parts={course.parts} /> */}
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
  console.log('app component')
  return( <Course course={course} />)
}

export default App