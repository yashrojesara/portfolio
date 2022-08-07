import Project from "./Components/Projects/Project";
import Header from "./Components/Header/Header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: "center",
    flexFlow: "wrap",
    background: "#242424",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Project />
    </div>
  );
}

export default App;
