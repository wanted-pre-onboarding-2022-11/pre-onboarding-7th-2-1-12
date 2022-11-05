import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Advertise, Dashboard } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
