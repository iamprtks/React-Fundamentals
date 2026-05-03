import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AvatarCard from './AvatarCard'

const avatars = [
  {
    id: 1,
    name: "Memo",
    role: "optimizer",
    power: "Memoization",
    initials: "MM",
  },
  {
    id: 2,
    name: "iron man",
    role: "destroyer",
    power: "laser",
    initials: "IM",
  },
  {
    id: 3,
    name: "thor",
    role: "god",
    power: "electricity",
    initials: "T",
  },
];



function Shell({title, children}){
  return (
    <section>
      <p>Resuable shell</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>children in shell</h1>
      <Shell title="Batman">
        <h1>this is inside shell</h1>
        <p>this also inside shell</p>
      </Shell>
      <h1>Hello from Prateek</h1>
      {avatars.map((avatar)=>(
        <AvatarCard
         key={avatar.id} 
         avatar={avatar}/>
      ))}
    </>
  )
}

export default App
