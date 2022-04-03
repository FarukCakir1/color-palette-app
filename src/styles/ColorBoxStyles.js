import chroma from "chroma-js";
import SizeHelpers from "./SizeHelpers";
export default {
    colorBox: {
      width: "20%",
      height: props => props.displayMore ? "25%" : "70%",
      // margin: "0 auto",
      display: "inline-block",
      position: "relative",
      marginBottom: "-6px",
      textTransform: "uppercase",
      "&:hover button": {
        opacity: "1"
      },
      [SizeHelpers.down("xl")]:{
        width: props => props.displayMore ? "25%" :"20%",
        height: props => props.displayMore ? "20%" : "70%",
      },
      [SizeHelpers.down("md")]:{
        width: props => props.displayMore ? "50%" :"100%",
        height: props => props.displayMore ? "10%" : "15%",
      },
      [SizeHelpers.down("sm")]:{
        width: props => props.displayMore ? "100%" :"100%",
        height: props => props.displayMore ? "5%" : "15%",
        marginBottom: "-4px"
      }
    },
    valueMsg : {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      fontSize: "1.5rem",
      fontWeight: "200"
    },
    copyText: {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      textAlign: "center",
      padding: "1rem",
      margin: "0",
      width: "100%",
      background: "rgba(255, 255, 255, 0.2)"
    },
    colorName: {
      color: props => chroma(props.colorValue).luminance() <= 0.08 ? "white" : "black"
    },
    moreBtn: {
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: "0",
      bottom: "0",
      fontSize: ".7rem",
      width: "50px",
      height: "25px",
      lineHeight: "25px",
      textAlign: "center",
      textDecoration: "none",
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
    },
    copyBtn: {
      color: props => chroma(props.colorValue).luminance() >= 0.7 ? "black" : "white",
      width: "5rem",
      height: "1.5rem",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-40px",
      marginTop: "-15px",
      border: "none",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      lineHeight: "25px",
      textAlign: "center",
      fontSize: "1rem",
      opacity: "0",
  },
  overlay: {
    opacity: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    transition: "transform 0.7s ease-in-out",
    transform: "scale(0.1)",
  },
  displayOverlay: {
    opacity: "1",
    transform: "scale(30)",
    zIndex: "10",
    position: "absolute",
  },
  message: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.7rem",
    opacity: "0",
    transform: "scale(0.1)",
    color: "white",
    textTransform: "uppercase",
  },
  displayMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all .7s ease-in-out",
    transitionDelay: ".4s",
  },
  content: {
    position: "absolute",
    width: "90%",
    color: "black",
    left: "0",
    bottom: "0",
    padding: "0.7rem",
    letterSpacing: "1px",
    fontSize: "0.8rem",
  }

    

}