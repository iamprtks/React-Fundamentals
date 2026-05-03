import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const name = 'Prateek';

const shows = [
  {
    id: 1,
    title: "The component Returns",
    time: "10 AM",
    hall: "Hall A",
  },
  {
    id: 2,
    title: "Attack of the re render",
    time: "12 AM",
    hall: "Hall C",
  },
  {
    id: 3,
    title: "Virtual Dom nights",
    time: "3 AM",
    hall: "Hall Q",
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Hello {shows[0].title} from Prateeek</h1>
        <h1>and hello {name} from project too</h1>
        <section className='grid'>
          {shows.map((show)=>(
          <article>
            <p className='tag'>{show.hall}</p>
            <h3>{show.title}</h3>
          </article>
          ))}
        </section>
      </div>
  )
}

export default App
