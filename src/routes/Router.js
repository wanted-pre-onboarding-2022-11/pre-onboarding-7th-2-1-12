import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTH_PATH } from "routes/routesPath";
import Dashboard from "pages/Dashboard";
import Management from "pages/Management";
import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTH_PATH.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTH_PATH.MANAGEMENT} element={<Management />} />
      <Route path={ROUTH_PATH.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
