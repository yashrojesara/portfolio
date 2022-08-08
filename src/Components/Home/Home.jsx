import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { Context } from "../context";
import Illustration from "../Icons/Illustration";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    padding: "3em 5em",
    width: "100%",
    fontFamily: "Rubik Mono One",
    color: "white",
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
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
  technology: {
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
  intro: {
    display: "flex",
    flexDirection: "column",
  },
});

const Home = () => {
  const classes = useStyles();
  const { setActiveTab } = useContext(Context);

  return (
    <div className={classes.wrapper}>
      <div className={classes.introduction}>
        <Illustration />
        <div className={classes.intro}>
          <span>Hello There 🙋‍♂️</span>
          <span>Front-End Developer</span>
        </div>
      </div>

      <div className={classes.heading}>
        <span className={classes.title}>Projects</span>
        <span className={classes.description}>
          This is some description about my project where I will write some more
          things about that
        </span>
        <span
          onClick={() => setActiveTab("Projects")}
          className={classes.button}
        >
          Check My Projects
        </span>
      </div>

      <div className={classes.heading}>
        <span className={classes.title}>Blogs</span>
        <span className={classes.description}>
          This is some description about my blog where I will write some more
          things about that
        </span>
        <span onClick={() => setActiveTab("Blogs")} className={classes.button}>
          Check My Blogs
        </span>
      </div>

      <div className={classes.heading}>
        <span className={classes.title}>Technologies i know</span>
        <div className={classes.technology}>
          Tes Test
          TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestt
          <div>
            <span>Test</span>
            <span>Test</span>
          </div>
        </div>
        <span onClick={() => setActiveTab("Blogs")} className={classes.button}>
          Check My Blogs
        </span>
      </div>
    </div>
  );
};

export default Home;
