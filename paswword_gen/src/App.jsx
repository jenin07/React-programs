import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [Password, setpassword] = useState("");

  // using useref

  const passref = useRef(null);


  const password_gen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "1234567890";
    if(character) str += "!@#$%&*(){}[_+-";

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);

    }

    setpassword(pass)
  }, [length, character, number, setpassword])


  const copyPassword = useCallback (() => {

    passref.current?.select()
    passref.current?.setSelectionRange
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(() => {
    password_gen();
  },[length, character, number, password_gen])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-purple-600 bg-gray-300'>
        <h1 className='text-white text-center my-3'>Password Genrator</h1>
        <div className='flex shadow rounded-md overflow-hidden mb-4'>
          <input
          className='outline-none w-full py-1 px-3'
          type='text'
          value={Password}
          placeholder='Password'
          readOnly
          ref={passref}
          />
          <button 
          onClick={copyPassword}
          className='oultine-none bg-violet-500 text-white px-3 py-1 shrink-0 rounded-md'>
            Copy
          </button>
        </div> 
        <div className='= flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input
              type='range'
              min={6}
              max={100}
              value = {length}
              className='cursor-pointer'
              onChange={(e) =>{setlength(e.target.value)}}
              />
              <label> Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
              />
              <label> Number: {number} </label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={character}
              id="characterinput"
              onChange={() => {
                setcharacter((prev) => !prev);
              }}
              />
              <label>Character: {character}</label>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
