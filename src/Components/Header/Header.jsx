import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2em 6em",
    color: "white",
    fontFamily: "rubik mono one",
  },
  author: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "darkturquoise",
    "&:hover": {
      color: "aquamarine",
    },
  },
  menu: {
    display: "flex",
  },
  home: {
    cursor: "pointer",
    color: "darkturquoise",
    "&:hover": {
      color: "aquamarine",
      textDecoration: "underline",
    },
  },
  projects: {
    cursor: "pointer",
    color: "darkturquoise",
    marginLeft: "1em",
    "&:hover": {
      color: "aquamarine",
      textDecoration: "underline",
    },
  },
  blogs: {
    cursor: "pointer",
    marginLeft: "1em",
    color: "darkturquoise",
    "&:hover": {
      color: "aquamarine",
      textDecoration: "underline",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.author}>Yash Rojesara</div>
      <div className={classes.menu}>
        <span className={classes.home}>Home</span>
        <span className={classes.projects}>Projects</span>
        <span className={classes.blogs}>Blogs</span>
      </div>
    </div>
  );
};

export default Header;
