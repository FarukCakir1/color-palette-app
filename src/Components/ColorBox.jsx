import React from 'react'
import "../CSS/ColorBox.css"

function ColorBox({ background, name }) {
  return (
    <div style={{background: background}} className='ColorBox'>
        <div className="container">
          <div className="content">
            <span>{name}</span>
          </div>
          <button className='copy-btn'>COPY</button>
        </div>
        <span className='more-btn'>MORE</span>
    </div>
  )
}

export default ColorBox