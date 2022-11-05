import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Advertise, Dashboard } from "../pages";
import ROUTE_PATH from "./paths";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_PATH.dashboard} element={<Dashboard />} />
          <Route path={ROUTE_PATH.advertise} element={<Advertise />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
