import React from 'react'
import { withStyles } from "@mui/styles"

const styles = {
    root: {
      width: "20%",
      height: "25%", 
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      marginBottom: "-5px",
      textTransform: "uppercase",
    },
    colorName: {
      position: "absolute",
      bottom: "0",
      left: "0",
      color: "white",
      paddingLeft: "10px",
      letterSpacing: "2px",
      fontSize: ".8rem",
      fontWeight: "100"
    },
    deleteBtn: {
      position: "absolute",
      bottom: "2px",
      right: "0",
      background: "none",
      border: "none",
      padingRight: "10px",
      color:"white",
      fontSize:"1rem",
      transition: "transform .5s ease-in-out",
      "&:hover":{
        transform: "scale(1.1)",
      }
    }

}

function DraggableColorBox({ classes, color, name, setNewColors, newColors }) {
    const { root, colorName, deleteBtn } = classes

    const handleDelete = () => {
      const filteredArr = newColors.filter(color => name !== color.name)
      setNewColors(filteredArr);
    }

  return (
    <div style={{backgroundColor: color}} className={root}>
        <div className={colorName}>
          {name}
        </div>
        <div className={deleteBtn}>
          <button onClick={handleDelete} className={deleteBtn}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default withStyles(styles) (DraggableColorBox)