import Project from "./Components/Projects/Project";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Context } from "./Components/context";
import { tabs } from "./helper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: "center",
    flexFlow: "wrap",
    background: "#242424",
  },
});

function App() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Project />;
      case "Blogs":
        return <Blogs />;
      default:
        return <Home />;
    }
  };

  return (
    <Context.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes.root}>
        <Header />
        {renderContent()}
      </div>
    </Context.Provider>
  );
}

export default App;
