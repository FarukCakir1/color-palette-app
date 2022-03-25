import React from 'react'
import { withStyles } from "@mui/styles"

const styles = {
    root: {
      width: "20%",
      height: "25%", 
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      marginBottom: "-1px",
      textTransform: "uppercase",
    }
}

function DraggableColorBox({ classes, color, name }) {
    const { root } = classes
  return (
    <div style={{backgroundColor: color}} className={root}>
        {name}
    </div>
  )
}

export default withStyles(styles) (DraggableColorBox)