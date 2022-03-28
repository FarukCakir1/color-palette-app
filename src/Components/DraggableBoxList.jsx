import React from 'react'
import {SortableContainer} from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox"

const DraggableBoxList = SortableContainer(({ newColors, setNewColors }) => {
  return (
    <div style={{height: "100%"}}>
        {newColors.map((color, i) =>
        (<DraggableColorBox
          index={i}
          color={color.color}
          name={color.name.toLocaleLowerCase()}
          setNewColors={setNewColors}
          newColors={newColors}
        />))}
    </div>
  )
})

export default DraggableBoxList