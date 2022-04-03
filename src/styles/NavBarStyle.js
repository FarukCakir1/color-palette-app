import SizeHelpers from "./SizeHelpers"
export default {
    NavBar: {
        width: "100vw",
        height: "5vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
    },
    leftSide: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
    },
    title: {
        width: "25%",
        height: "5vh",
        backgroundColor: "#2c2c2c",
        color: "white",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "2rem",
        [SizeHelpers.down("md")]:{
            width: "50%",
            fontSize: "1rem",
            marginRight: ".3rem"
        },
        [SizeHelpers.down("sm")]:{
            width: "50%",
            fontSize: ".7rem",
            display: props => props.displayTone && "none"
        }
    },
   
    btnGroups: {
        width: "50%",
        margin: "0 .3rem"
    },

    modeBtns: {
        margin: "0 1.5rem",
        justifySelf: "felx-end",
        [SizeHelpers.down("sm")]:{
            margin: "0 .5rem"
        }
    }
}