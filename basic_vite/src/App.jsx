import './App.css'
import Free  from './free'

function App() {
  const user = "hello world"

  return (

    // how to warp more than one element in react
    // <> are known as fragments 
    // {user} this is known as evaluated expression
    <> 
      <h1> {user}</h1>
      <Free/>
      <p>hello</p>
    </>
    
  )
}

export default App
