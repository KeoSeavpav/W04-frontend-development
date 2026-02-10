import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const TaskItem =()=> {return  <li>Individual Task</li>};
const TaskContainer = () => {
  const task = ["Task1","Task2","Task3"]
  return (
    <fieldset>
      <legend> My List </legend>
      {/* Render 3 TaskItems here */}
       <ul>
        {task.map((t,i) => (
           <TaskItem key ={i} task ={t} />
        ))}
       </ul>
    </fieldset>
  );
};
function App() {
  return (
    <>
      <TaskContainer/>;
    </>
  )
}

export default App
