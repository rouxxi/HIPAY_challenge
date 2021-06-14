import { makeStyles } from "@material-ui/core/styles";

const SlidersStyle = makeStyles({
  sliderWrapper: {
    backgroundColor: "black",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(255,255,255,0.3)",
    fontSize: "30px",
  },
  sliderDisplayed: {
    height: "400px",
    width: "250px",
    overflow: "hidden",
    margin: "30px 0",
    
    '@media(min-width: 680px)': {
      height: "700px",
      width: "400px",
      overflow: "hidden",
      margin: "20px ",
  },
  },
  swapButton: {
    border: "2px solid  rgba(255,255,255,0.3)",
    borderRadius: "5px",
    margin: "10px",
    "&:hover": {
      cursor: "pointer",
    },
    '@media(min-width: 680px)': {
      fontSize: '60px',
      borderRadius: "15px",
  },
  },
});

export default SlidersStyle;
