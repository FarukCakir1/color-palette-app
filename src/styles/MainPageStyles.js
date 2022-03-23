export default {
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
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
            fontWeight: "900",
        }
    },
    palette: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "7% 5%"
    }
}