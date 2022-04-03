import React from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from "@mui/styles"
import { useNavigate, Link } from "react-router-dom"
import styles from "../styles/MainPageStyles"

function MainPage({ classes, palettes, deletePalette}) {

    const { root, container, nav, palette } = classes;
    const navigate = useNavigate()

    const goToPalette = (id) => {
        navigate(`/palette/${id}`)
    }
    return (
        <div className={root}>
            <div className={container}>
                <div className={nav}>
                    <h4>Color Palette App</h4>
                    <Link to="/palette/new">Create Palette</Link>
                </div>
                <div className={palette}>
                    {palettes.map(palette => (
                        <MiniPalette 
                            key={palette.id} 
                            {...palette} 
                            goToPalette={() => {goToPalette(palette.id)}} 
                            deletePalette={deletePalette}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default withStyles(styles)(MainPage)