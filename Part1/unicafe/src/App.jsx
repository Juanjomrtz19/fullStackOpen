import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Result from './components/Result'
import Average from './components/Average'
import Positive from './components/Positive'

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
      <Result text={"good"} sum={good}/>
      <Result text={"neutral"} sum={neutral}/>
      <Result text={"bad"} sum={bad}/>
      <Result text={"all"} sum={all}/>
      <Average good={good} bad={bad} all={all}/>
      <Positive good={good} all={all}/>
    </div>
  )
}

export default App