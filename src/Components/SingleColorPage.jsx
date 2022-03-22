import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom"
import seedColors from '../seedColors'
import { createPalette } from "../Helpers/ShadeGenerator"
import ShadeCollector from '../Helpers/ShadeCollector'
import ColorBox from "../Components/ColorBox"
import Navbar from "../Components/NavBar"
import Footer from './Footer'

function SingleColorPage() {

  const [mode, setMode] = useState("rgb")
  const { paletteId, colorId } = useParams()
  const palette = createPalette(seedColors.find(palette => palette.id === paletteId))
  const shades = ShadeCollector(palette, colorId)
  const colorBoxes = shades.map(color =>
  (<ColorBox
    key={color.name}
    name={color.name}
    colorValue={mode === "hex" ? color.hex : color.rgb}
    displayMore={false}
  />))
  return (
    <div className='SingleColorPalette Palette'>
      <Navbar mode={mode} setMode={setMode} displayTone={false} />
      <div className="color-boxes">
        {colorBoxes}
        <Link style={{textDecoration: "none"}} to={`/palette/${paletteId}`}>
        <div className="go-back-btn">
          <h1>Go Back</h1>
        </div>
      </Link>
      </div>
      

      <Footer palette={palette} />
    </div>
  )
}

export default SingleColorPage