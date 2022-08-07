import { makeStyles } from "@mui/styles";
import { projectList } from "../projectList";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    background: "#242424",
  },
  cardWrapper: {
    justifyContent: "center",
    display: "flex",
    flexFlow: "wrap",
    padding: "3em 5em",
  },
});

const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper}>
        {projectList.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
