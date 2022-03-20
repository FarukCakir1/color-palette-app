import React from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from "@mui/styles"


const styles = {
    root: {
        backgroundColor: "#3D7FE3",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        color: "white"
    },
    palette: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "7% 4%"
    }
}

function MainPage({ classes, palettes }) {

    const { root, container, nav, palette } = classes;

    return (
        <div className={root}>
            <div className={container}>
                <div className={nav}>
                    <h4>Color Palette App</h4>
                </div>
                <div className={palette}>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default withStyles(styles)(MainPage)