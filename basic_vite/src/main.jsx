import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

// doesn't work because the element will not be supported in the render scope as it has keys and values,
// const reactELement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

// make another const
const anotherElement = "chai aur code" 
// (
  // <a href='https://www.google.com' target = '_blank'>visit google</a>
// )

// if you want to create reactelement without using html then you can create like this way
const reactELement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  "click me to visit ",
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // calling the const in the render scope
  // anotherElement
  reactELement
  // < App />
)
