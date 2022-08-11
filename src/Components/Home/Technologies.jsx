import { makeStyles } from "@mui/styles";
import { KnownTechnologies } from "../../helper";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5em",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1em",
    color: "aquamarine",
  },
  technology: {
    display: "flex",
    justifyContent: "center",
    margin: "2em 0em 1em 0em",
    fontSize: "18px",
    fontFamily: "monospace",
    width: "50%",
    marginTop: "0.5em",
    color: "darkturquoise",
    textTransform: "capitalize",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  list: {
    listStyle: "none",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0em",
    },
  },
  listTitle: {
    marginBottom: "0.75em",
    color: "white",
  },
}));

const Technologies = () => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <span className={classes.title}>Technologies i know 🌐</span>
      <div className={classes.technology}>
        {KnownTechnologies.map((technology, index) => {
          return (
            <ul key={index} className={classes.list}>
              <li className={classes.listTitle}>{technology.title}</li>
              {technology.list.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
