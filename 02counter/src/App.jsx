import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
//[variable, Function]
  // const [count, setCount] = useState(0)
  // let counter = 15
  const addValue = () => {
    // console.log("Value Added", Math.random());
    console.log("Clicked", counter);
    //counter = counter + 1
    setCounter(counter+1)
    
  }
  const removeValue = () => {
    console.log("Clicked", counter);
    setCounter(counter-1)
    
  }
  return (
    <>
      <h1>Rohit Ki React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
