import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Navbar from "./layout/Navbar";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
};

export default App;
