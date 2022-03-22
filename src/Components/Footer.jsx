import React from 'react'
import "../CSS/Footer.css"

function Footer({ palette }) {
  return (
    <div id='footer'>
        <footer id='footer'> 
          {palette.paletteName}
          <span>{palette.emoji}</span>
        </footer>
    </div>
  )
}

export default Footer