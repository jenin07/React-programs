import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setcounter] = useState(0)

// let counter = 0;

const addValue = () => {
  // console.log("clicked", counter);
  
  // counter++;
  if(counter == 20){
    return;
  }
  else{
    setcounter(counter + 1)
  }  
}

const remvalue = () => {
  if(counter == 0){
    return;
  }
  else{
    setcounter(counter - 1)
  }
  
}

  return (
    <>
      <h1>Jenin</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >add value</button><br></br>
      <button
      onClick={remvalue}
      >remove value</button>
    </>
  )
}

export default App
