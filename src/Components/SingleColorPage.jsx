import React from 'react'
import { useParams } from "react-router-dom"
import seedColors from '../seedColors'
import { createPalette } from "../Helpers/ShadeGenerator"
import ShadeCollector from '../Helpers/ShadeCollector'
import ColorBox from "../Components/ColorBox"

function SingleColorPage() {
  
  const { paletteId, colorId } = useParams()
  const palette = createPalette(seedColors.find(palette => palette.id === paletteId))
  const shades = ShadeCollector(palette, colorId)
  const colorBoxes = shades.map(color => 
    (<ColorBox 
        key={color.name}
        name={color.name}
        colorValue={color.hex}
        displayMore={false}
    />))
  return (
    <div>
       <div className="Palette">
          {colorBoxes}
       </div>
    </div>
  )
}

export default SingleColorPage