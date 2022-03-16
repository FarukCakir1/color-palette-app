import React, { useState } from 'react'
import ColorBox from './ColorBox'
import "../CSS/Palette.css"
import NavBar from './NavBar'

function Palette({palette}) {
    const [tone, setTone] = useState("darker")
    const [mode, setMode] = useState("rgb")
    const ColorBoxes = palette.colors[tone].map(color => 
      (<ColorBox 
        key={color.name} 
        colorValue={mode === "hex" ? color.hex : color.rgb} 
        name={color.name}
      />))
  return (
    <div className='Palette'>
        <NavBar title={palette.paletteName} emoji={palette.emoji} setTone={setTone} setMode={setMode}/>
        <div className="color-boxes">{ColorBoxes}</div>
    </div>
  )
}

export default Palette