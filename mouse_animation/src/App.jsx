import { useState } from 'react'
import './App.css'
import AppCircle from './AppCircle'

function App() {

  const [position, setPosition] = useState({x: 0, y: 0});

  const handleMouseMove = (e) =>{
    const {clientX, clientY} = e;
    setPosition({x: clientX, y: clientY});
  }

  return (
    <div className='App' onMouseMove={handleMouseMove}>
      <AppCircle x={position.x} y={position.y}/>
    </div>
  )
}

export default App
