import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { name } from "../../helper";

const useStyles = makeStyles({
  heading: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5em",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.5em",
  },
  description: {
    display: "flex",
    justifyContent: "center",
    margin: "2em 0em 1em 0em",
    fontSize: "18px",
    fontFamily: "monospace",
    width: "85%",
    marginTop: "0.5em",
    color: "darkturquoise",
    textTransform: "capitalize",
    textAlign: "justify",
  },
  button: {
    display: "flex",
    padding: "1em",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "14px",
    "&:hover": {
      background: "#2E2E2E",
    },
  },
  intro: {
    display: "flex",
    flexDirection: "column",
  },
  color1: {
    color: "aquamarine !important",
  },
  color2: {
    color: "darkturquoise !important",
  },
});

const Introduction = () => {
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <span className={classes.color1}>Hi There 🙋‍♂️, I'm</span>
      <span className={classes.color2} style={{ fontSize: "40px" }}>
        {name}
      </span>
      <span className={classes.color1}>Front-End Developer</span>
      <span className={classes.color2} style={{ marginTop: "1em" }}>
        Get In Touch with me
        <br />
        <Link
          className={classes.color1}
          href="mailto:yashsoni9861@gmail.com"
          target="_blank"
        >
          Click Here
        </Link>
      </span>
    </div>
  );
};

export default Introduction;
