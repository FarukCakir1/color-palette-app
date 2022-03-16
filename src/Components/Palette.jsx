import React from 'react'
import ColorBox from './ColorBox'
import "../CSS/Palette.css"

function Palette({ colors, emoji, id, paletteName }) {
    const ColorBoxes = colors.map(color => (<ColorBox key={color.name} background={color.color} name={color.name}/>))
  return (
    <div className='Palette'>
        <div className="color-boxes">{ColorBoxes}</div>
    </div>
  )
}

export default Palette