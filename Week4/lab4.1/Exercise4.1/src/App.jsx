import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 const TaskItem = (props) => {
    return(
      <div style = {{border:'1px solid black',margin:'5px'}}>
        {/*display Name and priority here */}
        <p>Name:{props.info.name}</p>
        <p>Priority:{props.info.priority}</p>
        <p>ID:{props.info.id}</p>
      </div>
    );
  };
function App() {
 const taskData ={ id:101,name:"Buy Milk",priority:"high"};

  return (
    <>
     <TaskItem info = {taskData}/>
    </>
  )
}

export default App
