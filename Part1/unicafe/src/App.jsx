import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import StatisticLine from './components/StatisticLine'
import Average from './components/Average'
import Positive from './components/Positive'

const Statistics = ({good, bad, neutral, all}) => {
  
  if(all === 0){
    return(<p>No feedback given</p>)
  }

  
  return(
    <table>
    <tbody>
      <tr>
      <StatisticLine text={"good"} sum={good}/>
      </tr>
      <tr>
      <StatisticLine text={"neutral"} sum={neutral}/>
      </tr>
      <tr>
      <StatisticLine text={"bad"} sum={bad}/>
      </tr>
      <tr>
      <StatisticLine text={"all"} sum={all}/>
      </tr>
      <tr>
      <Average good={good} bad={bad} all={all}/>
      </tr>
      <tr>
      <Positive good={good} all={all}/>
      </tr>
    </tbody>
    </table>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);

  return (
    <div>
      <Header title={"give feedback"}/>
      <Button onClick={() => {setGood(good + 1); setAll(all + 1);}} text={"good"}/>
      <Button onClick={() => {setNeutral(neutral + 1); setAll(all + 1);}} text={"neutral"}/>
      <Button onClick={() => {setBad(bad + 1); setAll(all + 1);}} text={"bad"}/>
      <h2>STATISTICS</h2>

      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
      
    </div>
  )
}

export default App