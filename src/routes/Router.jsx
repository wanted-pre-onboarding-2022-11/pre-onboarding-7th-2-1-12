import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTE_PATH from "./routerPaths";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={ROUTE_PATH.BASE} element={<Home />} />
          <Route path={`${ROUTE_PATH.DETAIL}`} element={<div>ads</div>} />
          <Route path={`${ROUTE_PATH.DETAIL}/:id`} element={<div>Detail</div>} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
