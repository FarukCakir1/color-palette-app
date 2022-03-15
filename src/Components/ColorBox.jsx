import React from 'react'
import "../CSS/ColorBox.css"

function ColorBox({ background, name }) {
  return (
    <div style={{background: background}} className='ColorBox'>
        <span>{name}</span>
    </div>
  )
}

export default ColorBox