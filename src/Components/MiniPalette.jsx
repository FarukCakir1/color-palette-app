import React from 'react'
import { withStyles } from "@mui/styles"
import { Link } from 'react-router-dom'

const styles = {
    root: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid teal",
        borderRadius: "5px",
        padding: ".5rem",
        height: "100%",
        marginTop: "1rem"
    },
    boxes: {
        width: "100%",
        height: "90%",
        marginTop: ".7rem"

    },
    title: {
        width: "100%",
        height: "20%",
        fontSize: ".7rem",
        display: "flex",
        justifyContent: "start",
        margin: ".3rem 0 0 0"
    },
    miniBoxes: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        positon: "relative",
        marginTop: "-3.5px"
    }

}

function MiniPalette({ classes, paletteName, colors, id }) {

    const { root, boxes, title, miniBoxes } = classes

    return (
        <Link style={{textDecoration: "none", color: "black"}} to={`/palette/${id}`}>
            <div className={root}>
                <div className={boxes}>
                    {colors.map(color => (
                        <div className={miniBoxes} style={{ backgroundColor: color.color }} key={color.name} />
                    ))}
                </div>
                <h5 className={title}>
                    {paletteName}
                </h5>
            </div>
        </Link>
        // <div className={root}>
        //     <div className={boxes}>
        //         {colors.map(color => (
        //             <div className={miniBoxes} style={{backgroundColor: color.color}} key={color.name}/>
        //         ))}
        //     </div>
        //     <h5 className={title}>
        //         {paletteName}
        //     </h5>
        // </div>
    )
}

export default withStyles(styles)(MiniPalette)