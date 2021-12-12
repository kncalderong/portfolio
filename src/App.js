import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

//import components

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
