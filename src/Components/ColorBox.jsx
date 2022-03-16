import React, { useState } from 'react'
import "../CSS/ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"

function ColorBox({ background, name }) {
  const [coppied, setCoppied] = useState(false)


  return (
      <CopyToClipboard text={background} onCopy={() => {
        setCoppied(true)
        setTimeout(() => setCoppied(false), 1900)
      }}>
        <div style={{ background: background }} className='ColorBox'>
          <div style={{ background: background }} className={`overlay ${coppied && "display"}`} />
          <div className={`message ${coppied && "display"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="container">
            <div className="content">
              <span>{name}</span>
            </div>
            <button className='copy-btn'>COPY</button>
          </div>
          <span className='more-btn'>MORE</span>
        </div>
      </CopyToClipboard>

  )
}

export default ColorBox