import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multiplied, setMultiplied] = useState(1)
  let multiplied = value * 5

  const mutiple = () => {
    // setMultiplied(value * 5);
    setValue(value + 1);
  }

  return (
    <>
      <h1>Main value: {value}</h1>
      <button
      onClick={mutiple}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multiplied}</h2>
    </>
  )
}

export default App
