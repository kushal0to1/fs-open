/* eslint-disable react/prop-types */
import React from "react"

const Course = ({ course }) => {
  console.log(course)


  const Header = (props) => {
    console.log(props.course)
    return (
      <h2>{props.course}</h2>

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

  const Total = ({ parts }) => {
    const sum = parts.reduce((sum, p) =>
      sum + p.exercises, 0
    )
    return (
      <p><b>Total of  {sum} exercises</b></p>
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
      <Total parts={course.parts} />
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

  return (
    <div>
      <h1>Web development curriculum</h1>
     { courses.map(course => {
        return(
          <Course key={course.id} course={course} />
        )
      })}
    </div>
  )
}

export default App