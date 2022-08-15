import Project from "./Components/Projects/Project";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Header from "./Components/Header/Header";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Context } from "./Components/context";
import { tabs } from "./helper";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

  const theme = createTheme({});

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
    <BrowserRouter>
      <Context.Provider value={{ activeTab, setActiveTab }}>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />
            <Routes>
              <Route path="/" element={renderContent()}></Route>
              <Route path="/blog/:id" element={<BlogDetails />}></Route>
              <Route path="*" element={renderContent()}></Route>
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
