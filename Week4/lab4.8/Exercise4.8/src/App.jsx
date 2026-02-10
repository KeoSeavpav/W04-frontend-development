import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const ColorPicker = ({onColorChange}) => (
  <input type="color" onChange ={(e) => onColorChange(e.target.value)} />
);
function App() {
  const [bg,setBg] = useState("#ffffff")

  return (
    <>
      <div style={{backgroundColor: bg ,height:'100vh'}}>
        <ColorPicker onColorChange={setBg} />
      </div>
    </>
  )
}

export default App
