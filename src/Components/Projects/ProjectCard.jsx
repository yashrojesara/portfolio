import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import makeStyles from "@mui/styles/makeStyles";
import { Link, Tooltip } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none !important",
    backgroundColor: "#242424 !important",
    fontFamily: "Rubik Mono One",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#2E2E2E",
    color: "white",
    padding: "1.5em !important",
    margin: "1em",
    maxWidth: "320px",
    minWidth: "320px",
    minHeight: "180px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "1em 0em",
      padding: "0.75em !important",
      maxWidth: "300px",
      minWidth: "300px",
    },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    maxWidth: "85%",
    fontWeight: "100",
    fontSize: "14px",
    color: "aquamarine",
  },
  date: {
    fontSize: "12px",
    fontFamily: "monospace",
  },
  description: {
    fontSize: "15px",
    fontFamily: "monospace",
    width: "85%",
    marginTop: "0.5em",
    color: "darkturquoise",
    textTransform: "capitalize",
    textAlign: "justify",
  },
  end: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1em",
  },
  technology: {
    marginLeft: "0.5em",
  },
  mark: {
    display: "flex",
    fontSize: "12px",
  },
  border: {
    display: "flex",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    padding: "0.35em",
    borderRadius: "10px",
    color: "aquamarine",
  },
  iconColor: {
    color: "aquamarine",
  },
  tooltip: {
    backgroundColor: "darkturquoise !important",
    color: "black !important",
  },
  customArrow: {
    color: "darkturquoise !important",
  },
}));

const ProjectCard = (props) => {
  const { project } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.header}>
          <span className={classes.title}>{project.title}</span>
          <span className={classes.date}>{project.date}</span>
        </div>

        <span className={classes.description}>{project.description}</span>

        <div className={classes.end}>
          <div className={classes.button}>
            <Tooltip
              classes={{
                tooltip: classes.tooltip,
                arrow: classes.customArrow,
              }}
              title="GitHub Link"
              arrow
            >
              <Link href={project.githubLink} target="_blank">
                <GitHubIcon className={classes.iconColor} />
              </Link>
            </Tooltip>
            <Tooltip
              classes={{
                tooltip: classes.tooltip,
                arrow: classes.customArrow,
              }}
              title="Live Link"
              arrow
            >
              <Link href={project.liveLink} target="_blank">
                <ExitToAppIcon
                  className={classes.iconColor}
                  style={{ marginLeft: "0.5em" }}
                />
              </Link>
            </Tooltip>
          </div>
          <div className={classes.mark}>
            <span className={classes.border}>{project.mark}</span>
            <span className={`${classes.technology} ${classes.border}`}>
              {project.technology}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
