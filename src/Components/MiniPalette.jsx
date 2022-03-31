import React from 'react'
import { withStyles } from "@mui/styles"
import styles from "../styles/MiniPaletteStyles"


function MiniPalette({ classes, paletteName, colors, goToPalette, emoji }) {

    const { root, boxes, title, miniBoxes } = classes

    return (
        <div className={root} onClick={goToPalette}>
            <div className={boxes}>
                {colors.map(color => (
                    <div className={miniBoxes} style={{backgroundColor: color.color}} key={color.name}/>
                ))}
            </div>
            <h5 className={title}>
                <span>{paletteName}</span>
                <span>{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)