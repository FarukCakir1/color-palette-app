import SizeHelpers from "./SizeHelpers"
export default {
    root: {
        background: "#3D7FE3",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start"
    },
    container: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        [SizeHelpers.down("lg")]: {
            width: "80%"
        }
    },
    nav: {
        height: "2rem",
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
        gridGap: "1rem",
        [SizeHelpers.down("md")]: {
            gridTemplateColumns: "repeat(3, 33%)",
        },
        [SizeHelpers.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        }


    }
}