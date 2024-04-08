/* eslint-disable react/prop-types */
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    return (
<div>
  
        <Part partName={part1} exerciseName={exercises1} />
        <Part partName={part2} exerciseName={exercises2} />
        <Part partName={part3} exerciseName={exercises3} />
      
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
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App