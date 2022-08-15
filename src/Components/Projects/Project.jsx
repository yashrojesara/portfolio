import { makeStyles } from "@mui/styles";
import { projectList } from "../projectList";
import ProjectCard from "./ProjectCard";

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
    [theme.breakpoints.down("sm")]: {
      padding: "0em",
    },
  },
}));

const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <span className={classes.heading}>Projects</span>
      <div className={classes.cardWrapper}>
        {projectList.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
