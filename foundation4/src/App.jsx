import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [value, setValue] = useState(6)
  //let value =6;
  const increase = ()=>{
    setValue(value+1);
  }
  const decrease = ()=>{
    setValue(value-1);
  }
  return (
    <>
      <div>
        <h1>value: {value}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  )
}

export default App
