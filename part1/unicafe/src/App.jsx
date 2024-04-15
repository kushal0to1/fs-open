/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = (props) => {
   return (
    <div>
       <h1>Statistics</h1>
       <p>Good {props.good}</p>
       <p>Neutral {props.neutral}</p>
       <p>Bad {props.bad}</p>
       <p>All {props.sum}</p>
       <p>Average {props.average}</p>
       <p>Positive {props.percentage} %</p>
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
      <button onClick={()=> setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
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