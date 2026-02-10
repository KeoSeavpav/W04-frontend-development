import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[title,settitle] = useState("")
  const[desc,setdesc] = useState("")

  return (
    <>
    <form >
      <input placeholder='Title' value={title} onChange={(e) => settitle(e.target.value)} />
      <input placeholder='Description' value={desc} onChange={(e) => setdesc(e.target.value)}/>
      <p>Preview:{title}-{desc}</p>
    </form>

      
    </>
  );
}

export default App;