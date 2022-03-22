import React, { useState } from 'react'
import "../CSS/ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import chroma from "chroma-js"
import { Link } from "react-router-dom"

function ColorBox({ colorValue, name, moreURL, displayMore }) {
  const [coppied, setCoppied] = useState(false)

  const checkDarkness = chroma(colorValue).luminance() <= 0.08;
  const checkLightness = chroma(colorValue).luminance() >= 0.6;
  return (
    <CopyToClipboard text={colorValue} onCopy={() => {
      setCoppied(true)
      setTimeout(() => setCoppied(false), 1900)
    }}>
      <div style={{ background: colorValue }} className='ColorBox'>
        <div style={{ background: colorValue }} className={`overlay ${coppied && "display"}`} />
        <div className={`message ${coppied && "display"}`}>
          <h1>Copied!</h1>
          <p>{colorValue}</p>
        </div>
        <div className="container">
          <div className="content">
            <span className={checkDarkness && "light-text"}>{name}</span>
          </div>
          <button className='copy-btn'>COPY</button>
        </div>
        {displayMore && (
          <Link to={moreURL} onClick={e => e.stopPropagation()}>
            <span className={`more-btn ${checkLightness && "dark-text"}`}>MORE</span>
          </Link>
        )}

      </div>
    </CopyToClipboard>

  )
}

export default ColorBox