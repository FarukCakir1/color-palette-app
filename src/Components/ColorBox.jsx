import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import chroma from "chroma-js"
import { Link } from "react-router-dom"
import { withStyles } from "@mui/styles"
import styles from "../styles/ColorBoxStyles"




function ColorBox({ classes ,colorValue, name, moreURL, displayMore }) {
  const [coppied, setCoppied] = useState(false)

  const {
    valueMsg, 
    copyText, 
    colorName, 
    moreBtn, 
    copyBtn, 
    colorBox, 
    overlay, 
    displayOverlay,
    message,
    displayMessage,
    content
  } = classes;

  return (
    <CopyToClipboard text={colorValue} onCopy={() => {
      setCoppied(true)
      setTimeout(() => setCoppied(false), 1900)
    }}>
      <div style={{ background: colorValue }} className={colorBox}>
        <div style={{ background: colorValue }} className={`${overlay} ${coppied && displayOverlay}`} />
        <div className={`${message} ${coppied && displayMessage}`}>
          <h1 className={copyText}>Copied!</h1>
          <p className={valueMsg}>{colorValue}</p>
        </div>
        <div>
          <div className={content}>
            <span className={colorName}>{name}</span>
          </div>
          <button className={copyBtn}>COPY</button>
        </div>
        {displayMore && (
          <Link to={moreURL} onClick={e => e.stopPropagation()}>
            <span className={moreBtn}>MORE</span>
          </Link>
        )}

      </div>
    </CopyToClipboard>

  )
}

export default withStyles(styles) (ColorBox)



