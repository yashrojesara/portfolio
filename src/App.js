import Project from "./Components/Projects/Project";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Context } from "./Components/context";
import { tabs } from "./helper";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "wrap",
    background: "#242424",
    overflow: "auto",
  },
});

function App() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const theme = {};

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
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          {renderContent()}
          <Footer />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
