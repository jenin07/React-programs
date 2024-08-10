import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >Green</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "violet"}}
          onClick={() => setColor("violet")}
          >Violet</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "lavender"}}
          onClick={() => setColor("lavender")}
          >Lavender</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "aqua"}}
          onClick={() => setColor("aqua")}
          >Aqua</button>
          <button className='outline-none px-4 py-2 rounded-full text-white font-bold' style={{backgroundColor: "grey"}}
          onClick={() => setColor("grey")}
          >Grey</button>
          </div>
      </div>

    </div>
  )
}

export default App
