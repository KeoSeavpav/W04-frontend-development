import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function TaskList({tasks}) {
  return(
  <ul>
    {tasks.map((task,index) => (
      <li key={index}>{tasks}</li>
    ))}
  </ul>
  );
}
function EmptyMessage() {
  return <p>No Tasks available.Please add a task.</p>
}
function App() {
  const tasks =["JSX"];
  let content;
   if(tasks.length === 0){
         content= <EmptyMessage/>
        } else{
         content= <TaskList tasks ={tasks} />
        }

  return (
    <>
      <div>
        
       {content}

      </div>
    </>
  )
}

export default App
