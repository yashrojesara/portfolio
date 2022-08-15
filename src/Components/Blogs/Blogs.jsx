import { makeStyles } from "@mui/styles";
import { blogList } from "../blogList";
import BlogsCard from "./BlogsCard";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    fontFamily: "Rubik Mono One",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    padding: "1em 1em 0em 1em",
  },
  heading: {
    color: "darkturquoise",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    padding: "2em 5em",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "0em",
    },
  },
}));

const Blogs = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <span className={classes.heading}>Blogs</span>
      <div className={classes.cardWrapper}>
        {blogList.map((blog) => {
          return <BlogsCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
