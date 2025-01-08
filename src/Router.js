import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import Home from "./Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home/>} /> {/* Default route */}
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
