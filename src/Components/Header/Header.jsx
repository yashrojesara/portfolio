import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { name, tabs } from "../../helper";
import { Context } from "../context";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2em 6em",
    color: "white",
    fontFamily: "rubik mono one",
    [theme.breakpoints.down("md")]: {
      padding: "2em 6em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  author: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "darkturquoise",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tab: {
    marginLeft: "1em",
    cursor: "pointer",
    color: "darkturquoise",
    "&:hover": {
      color: "aquamarine",
      textDecoration: "underline",
    },
  },
  activeTab: {
    textDecoration: "underline",
    color: "aquamarine",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { activeTab, setActiveTab } = useContext(Context);

  return (
    <div className={classes.header}>
      <div onClick={() => setActiveTab("Home")} className={classes.author}>
        {name}
      </div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <span
              key={index}
              className={`${classes.tab} ${
                activeTab === tab && classes.activeTab
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
