import React, { useState } from 'react'
import "../CSS/ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import chroma from "chroma-js"
import { Link } from "react-router-dom"
import { withStyles } from "@mui/styles"


const styles = {
    valueMsg : {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      fontSize: "1.5rem",
      fontWeight: "200"
    },
    copyText: {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
    },
    colorName: {
      color: props => chroma(props.colorValue).luminance() <= 0.08 ? "white" : "black"
    },
    moreBtn: {
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: "0",
      bottom: "0",
      fontSize: ".7rem",
      width: "50px",
      height: "25px",
      lineHeight: "25px",
      textAlign: "center",
      textDecoration: "none",
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
    }

}

function ColorBox({ classes ,colorValue, name, moreURL, displayMore }) {
  const [coppied, setCoppied] = useState(false)

  const {valueMsg, copyText, colorName, moreBtn} = classes;

  return (
    <CopyToClipboard text={colorValue} onCopy={() => {
      setCoppied(true)
      setTimeout(() => setCoppied(false), 1900)
    }}>
      <div style={{ background: colorValue }} className='ColorBox'>
        <div style={{ background: colorValue }} className={`overlay ${coppied && "display"}`} />
        <div className={`message ${coppied && "display"}`}>
          <h1 className={copyText}>Copied!</h1>
          <p className={valueMsg}>{colorValue}</p>
        </div>
        <div className="container">
          <div className="content">
            <span className={colorName}>{name}</span>
          </div>
          <button className='copy-btn'>COPY</button>
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



