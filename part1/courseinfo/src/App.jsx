/* eslint-disable react/prop-types */
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



  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    return (
<div>
  
        <Part partName={part1.name} exerciseName={part1.exercises} />
        <Part partName={part2.name} exerciseName={part2.exercises} />
        <Part partName={part3.name} exerciseName={part3.exercises} />
      
</div>
      )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {props.total}</p>
    )
  }

  const Part = (props) => {
  return(
    <p>{props.partName} {props.exerciseName}</p>
  )
  }

  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App