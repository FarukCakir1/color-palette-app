import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SizeHelpers from "../styles/SizeHelpers"
import { withStyles } from "@mui/styles";
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-5px",
    textTransform: "uppercase",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },

    "& svg": {
      transition: "all 0.3s ease-in-out",
      fontSize: "1rem"
    },

    [SizeHelpers.down("lg")]:{
      width: "25%",
      height: "20%",
      marginBottom: "-6px"
    },
    [SizeHelpers.down("md")]:{
      width: "50%",
      height: "10%",
      marginBottom: "-5.8px"
    },
    [SizeHelpers.down("sm")]:{
      width: "100%",
      height: "5%",
      marginBottom: "-5.5px"
    }

  },
  content: {
    position: "absolute",
    width: "100%",
    color: "white",
    left: "0",
    bottom: "0",
    padding: "0.5rem",
    letterSpacing: "1px",
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "space-between"
  },
  

}

const DraggableColorBox = SortableElement(({ classes, color, name, setNewColors, newColors }) => {
  const { root, colorName, deleteIcon, content } = classes

  const handleDelete = (e) => {
    e.stopPropagation()
    const filteredArr = newColors.filter(color => name !== color.name)
    setNewColors(filteredArr);

  }

  return (
    <div style={{ backgroundColor: color }} className={root}>
      <div className={content}>
        <span>{name}</span>
        <DeleteIcon onClick={handleDelete}/>
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)