import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blogs/Blog";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
