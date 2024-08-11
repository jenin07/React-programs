import { useState, useCallback  } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [Password, setpassword] = useState("")

  const password_gen = useCallback(() => {}, [Password, length, character, number])

  return (
    <>
      <h1 className='text-4xl text-center text text-white'>
        Password Generator
      </h1>
    </>
  )
}

export default App
