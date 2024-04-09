/* eslint-disable react/prop-types */
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




  const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Content = (props) => {
    
    return (
<div>
  
       { props.parts.map((p, index) => (
          <Part key={index} partName={p.name} exercises={p.exercises} />
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
  return(
    <p>{props.partName} {props.exercises}</p>
  )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

export default App