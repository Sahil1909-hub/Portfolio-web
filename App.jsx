import { useState } from 'react'
import './App.css'

function App() {
 
  const [counter, setCounter] = useState(10)

  const addValue = () => {
     if(counter < 20) {
      setCounter(counter + 1)
     }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h1>Count = {counter}</h1>
     <header>Count = {counter}</header>
     <br />
     <button onClick={addValue}>Increment</button>
     <br />
     <br />
     <button onClick={removeValue}>Decrement</button>
     <br />
     <br />
     <footer>Count = {counter}</footer>
    </>
  )
}

export default App
