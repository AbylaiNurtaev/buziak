import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Navbar from "./layout/Navbar";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </Router>
  );
};

export default App;
