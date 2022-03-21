import React, { useState } from 'react'
// Components
import ColorBox from './ColorBox'
import NavBar from './NavBar'
// Style
import "../CSS/Palette.css"
// Packages
import { useParams } from "react-router-dom"
// Helpers"
import seedColors from '../seedColors'
import { createPalette } from "../Helpers/ShadeGenerator";

function Palette() {
    const { id } = useParams()
    const palette = createPalette(seedColors.find(palette => palette.id === id))
    const [tone, setTone] = useState("normal")
    const [mode, setMode] = useState("rgb")
    const ColorBoxes = palette.colors[tone].map(color => 
      (<ColorBox 
        key={color.name} 
        colorValue={mode === "hex" ? color.hex : color.rgb} 
        name={color.name}
        moreURL={`/palette/${id}/${color.id}`}
        displayMore={true}
      />))
  return (
    <div className='Palette'>
        <NavBar paletteName={palette.paletteName} emoji={palette.emoji} setTone={setTone} setMode={setMode} mode={mode} tone={tone}/>
        <div className="color-boxes">{ColorBoxes}</div>
        <footer id='footer'> 
          {palette.paletteName}
          <span>{palette.emoji}</span>
        </footer>
    </div>
  )
}

export default Palette