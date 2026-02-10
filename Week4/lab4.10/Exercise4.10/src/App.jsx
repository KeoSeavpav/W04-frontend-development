import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[search,setSearch] = useState("");
  const items = ["Apple","Banana","Cheery"];
  const fillteredItems = items.filter(items =>items.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <div>
      <input type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)} />
      <ul>
         {fillteredItems.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
     
    </>
  )
}

export default App
