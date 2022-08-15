import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AboutMe, BlogDescription, ProjectDescription } from "../../helper";
import { Context } from "../context";
import Illustration from "../Icons/Illustration";
import Content from "./Content";
import Introduction from "./Introduction";
import Technologies from "./Technologies";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    padding: "3em 5em",
    width: "100%",
    fontFamily: "Rubik Mono One",
    [theme.breakpoints.down("sm")]: {
      padding: "0em",
    },
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { setActiveTab } = useContext(Context);

  return (
    <div className={classes.wrapper}>
      <div className={classes.introduction}>
        <Illustration />
        <Introduction />
      </div>
      <div>
        <Content
          title={"About Me 🙋‍♂️"}
          description={AboutMe}
          isNeedToShowButton={false}
        />

        <Content
          title={"Projects 💻"}
          description={ProjectDescription}
          isNeedToShowButton={true}
          buttonName={"Check My Projects"}
          onClick={() => setActiveTab("Projects")}
        />

        <Content
          title={"Blogs 📝"}
          description={BlogDescription}
          isNeedToShowButton={true}
          buttonName={"Check My Blogs"}
          onClick={() => setActiveTab("Blogs")}
        />

        <Technologies />
      </div>
    </div>
  );
};

export default Home;
