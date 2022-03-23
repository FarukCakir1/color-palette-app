import React from 'react'
import { withStyles } from "@mui/styles"
import styles from "../styles/MiniPaletteStyles"


function MiniPalette({ classes, paletteName, colors, goToPalette }) {

    const { root, boxes, title, miniBoxes } = classes

    return (
        <div className={root} onClick={goToPalette}>
            <div className={boxes}>
                {colors.map(color => (
                    <div className={miniBoxes} style={{backgroundColor: color.color}} key={color.name}/>
                ))}
            </div>
            <h5 className={title}>
                {paletteName}
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)