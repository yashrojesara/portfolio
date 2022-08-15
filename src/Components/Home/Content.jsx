import { makeStyles } from "@mui/styles";

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
    color: "aquamarine",
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
    color: "aquamarine",
    "&:hover": {
      background: "#2E2E2E",
    },
  },
});

const Content = (props) => {
  const { title, description, isNeedToShowButton, buttonName, onClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <span className={classes.title}>{title}</span>
      <span className={classes.description}>{description}</span>
      {isNeedToShowButton && (
        <span onClick={onClick} className={classes.button}>
          {buttonName}
        </span>
      )}
    </div>
  );
};

export default Content;
