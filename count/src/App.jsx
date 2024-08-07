import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 0;

const addValue = () => {
  console.log("clicked", counter);
  
  counter++;
  
}

  return (
    <>
      <h1>Jenin</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >add value{counter}</button><br></br>
      <button>remove value</button>
    </>
  )
}

export default App
