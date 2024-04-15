/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (


<tbody>
        <tr>
          <td>{props.text}</td>
          <td> {props.value}</td>
        </tr>
  
</tbody>

  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table><StatisticLine text="No feedback given" /></table>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.sum} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={`${props.percentage} %`} />
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        sum={(good + neutral + bad)}
        average={(good - bad) / (good + neutral + bad)}
        percentage={(good / (good + neutral + bad)) * 100}
      />

    </div>
  )
}

export default App