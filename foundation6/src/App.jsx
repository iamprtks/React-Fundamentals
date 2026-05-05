import { useState } from 'react'
import ManualForm from './ManualForm.jsx'
import HookForm from './HookForm.jsx'
import './App.css'

function App() {
  const [tab, setTab] = useState("manual")

  return (
    <>
      <div>
        <div className='shell'>
          <h1>Job applications</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero delectus iure nostrum recusandae distinctio placeat odio quae inventore accusamus quod aspernatur obcaecati laudantium totam, eos magni provident quaerat quas velit.
          </p>
        </div>
        <div className='tab'>
          <button onClick={()=> setTab('manual')}>controlled-Manual</button>
          <button onClick={()=> setTab('rhf')}>React HookForm</button>
        </div>
        <h1>Getting Started</h1>
        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>
    </>
  )
}

export default App
