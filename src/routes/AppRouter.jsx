import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/AdManagement/Layout";
import NotFound from "../pages/NotFound";
import { routes } from "./routePath";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
