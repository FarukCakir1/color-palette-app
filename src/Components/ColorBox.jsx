import React, { useState } from 'react'
import "../CSS/ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import chroma from "chroma-js"
import { Link } from "react-router-dom"
import { withStyles } from "@mui/styles"


const styles = {
    colorBox: {
      width: "20%",
      height: props => props.displayMore ? "25%" : "70%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      marginBottom: "-3.9px",
      textTransform: "uppercase",
      "&:hover button": {
        opacity: "1"
      }
    },
    valueMsg : {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      fontSize: "1.5rem",
      fontWeight: "200"
    },
    copyText: {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      textAlign: "center",
      padding: "1rem",
      margin: "0",
      width: "100%",
      background: "rgba(255, 255, 255, 0.2)"
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
    },
    copyBtn: {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      width: "80px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-40px",
      marginTop: "-15px",
      border: "none",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      lineHeight: "25px",
      textAlign: "center",
      fontSize: "1rem",
      opacity: "0",
  },
  overlay: {
    opacity: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    transition: "transform 0.7s ease-in-out",
    transform: "scale(0.1)"
  },
  displayOverlay: {
    opacity: "1",
    transform: "scale(10)",
    zIndex: "10",
    position: "absolute"
  },
  message: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.7rem",
    opacity: "0",
    transform: "scale(0.1)",
    color: "white",
    textTransform: "uppercase",
  },
  displayMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all .7s ease-in-out",
    transitionDelay: ".4s",
  }

    

}

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
    displayMessage
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
          <div className="content">
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



