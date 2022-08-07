import { makeStyles } from "@mui/styles";
import { projectList } from "../projectList";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    padding: "3em 5em",
  },
});

const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      {projectList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Project;
