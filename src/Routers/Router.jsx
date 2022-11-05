import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import AdPage from "../Pages/AdPage";
import DashboardPage from "../Pages/DashboardPage";
import { PATH } from "./path";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={PATH.BASE} element={<DashboardPage />} />
          <Route path={PATH.AD_PAGE} element={<AdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
