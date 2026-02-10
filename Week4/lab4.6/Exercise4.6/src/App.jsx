import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const StatusBadge = ({active,onToggle}) => (
 <button onClick={onToggle}>{active?"Done" : "Pending"}</button>
);
function App() {
  const [isDone,setIsDone] = useState(false);

  return (
    <>
    <StatusBadge active ={isDone} onToggle={() => setIsDone(!isDone)}/>;
    </>
  )
}

export default App
