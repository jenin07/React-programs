import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    user: 'Jenin',
    age: '21'
  }

  let arr = [2,3,4];

  return (
    <>
     <h1 className="bg-red-500 text-black p-4 rounded-md mb-4" >tailwind test</h1>
     <Card username='Jenin' myobj = {obj} myarr ={arr}/>
     <Card username='Jaim' btnText = "Hello from jaim"/>
    </>
  )
}

export default App
