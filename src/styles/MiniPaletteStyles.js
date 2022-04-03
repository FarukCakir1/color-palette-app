export default {
    root: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid teal",
        borderRadius: "5px",
        padding: ".5rem",
        height: "20vh",
        marginTop: ".5rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        "&:hover svg": {
            opacity: "1"
        }
    },
    boxes: {
        width: "100%",
        height: "100%",
        marginTop: ".7rem",
        borderRadius: "5px",
        overflow:"hidden",

    },
    title: {
        width: "100%",
        height: "20%",
        fontSize: ".7rem",
        display: "flex",
        justifyContent: "space-between",
        margin: ".3rem 0 0 0"
    },
    miniBoxes: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        positon: "relative",
        marginBottom: "-6px"
    },
    deleteIcon: {
        position: "absolute",
        top: "0",
        right: "0",
        background: "red",
        padding: ".3rem",
        color: "white",
        opacity: "0",
    }


}