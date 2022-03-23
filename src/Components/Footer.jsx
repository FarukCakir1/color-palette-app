import React from 'react'
import { withStyles } from '@mui/styles'
import styles from "../styles/FooterStyles"

function Footer({ palette, classes }) {
  return (
    <div className={classes.footer} >
        <footer className={classes.footer}> 
          {palette.paletteName}
          <span>{palette.emoji}</span>
        </footer>
    </div>
  )
}

export default withStyles(styles) (Footer)