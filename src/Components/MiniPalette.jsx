import React, { memo } from 'react'
import { withStyles } from "@mui/styles"
import styles from "../styles/MiniPaletteStyles"
import DeleteIcon from '@mui/icons-material/Delete';


 function MiniPalette ({ classes, paletteName, colors, goToPalette, emoji, id, openDialog}) {

    const { root, boxes, title, miniBoxes, deleteIcon } = classes

    const handleDelete = (e) => {
        e.stopPropagation()
        openDialog(id)
    }
    return (
        <div className={root} onClick={goToPalette}>
            <DeleteIcon 
                fontSize='small' 
                className={deleteIcon} 
                style={{transition: "all .5s ease-in-out"}} 
                onClick={handleDelete}
            />
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