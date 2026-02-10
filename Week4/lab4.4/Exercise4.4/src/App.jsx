import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState(["Task 1"])
  const [task, setTask] = useState("")

  // 1. Implement handleAdd
  const handleAdd = () => {
    setList([...list, task])
    setTask("")
  }

  return (
    <>
      {/* 2. Text input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add item</button>

      {/* 3. Display the list */}
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default App