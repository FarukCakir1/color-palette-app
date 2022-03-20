import React from 'react'
import { Link } from 'react-router-dom'

function MainPage({ palettes }) {
  return (
    <div>
        <h1>Palettes App</h1>
        {palettes.map(palette => (
            <Link to={`/palette/${palette.id}`}>
                <h3>{palette.paletteName}</h3>
            </Link>
        ))}
    </div>
  )
}

export default MainPage