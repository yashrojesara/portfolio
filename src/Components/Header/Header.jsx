import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { name, tabs } from "../../helper";
import { Context } from "../context";

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
    color: "aquamarine",
    "&:hover": {
      color: "aquamarine",
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
});

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
