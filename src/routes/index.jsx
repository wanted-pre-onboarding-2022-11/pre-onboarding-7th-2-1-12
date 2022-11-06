import { BrowserRouter, Route, Routes } from "react-router-dom";

import ROUTE_PATH from "routes/routePath";
import Layout from "layouts";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTE_PATH.DASHBOARD} element={<div>대시보드</div>} />
        <Route path={ROUTE_PATH.ADVERTISEMENT} element={<div>광고관리</div>} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<div>NOT_FOUND</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
