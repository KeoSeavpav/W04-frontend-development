import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 const TaskItem = ({name,onRemove}) => {
  return(
  <li>{name} <button onClick={onRemove}>Delete</button></li>
  )
 };
function App() {
    const [tasks,setTasks] = useState(["React","JSX","Props"])
     const removeTask = (index) => {
          setTasks(tasks.filter((_, i) => i !== index))
     }
  return (
    <>
     <ul>
      {tasks.map((t,i) => <TaskItem key={i} name={t} onRemove ={() => removeTask(i)}/>)}
     </ul>
    </>
  )
}

export default App
