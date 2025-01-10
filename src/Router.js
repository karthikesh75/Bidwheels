import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import Home from "./Home";
import Orderhistory from "./Orderhistory";
import Bidlist from "./Bidlist";
import Listorders from "./Listorders";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home/>} /> {/* Default route */}
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/orderhistory" element={<Orderhistory />} />
        <Route path="/bidlist" element={<Bidlist />} />
        <Route path="/listorder" element={<Listorders />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
