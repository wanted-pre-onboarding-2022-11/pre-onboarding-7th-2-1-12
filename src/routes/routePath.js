import AdManagementPage from "../pages/AdManagementPage";
import DashBoardPage from "../pages/DashBoardPage";

export const routePath = {
  dashBoard: "/",
  adManagement: "/adManagement",
};

export const routes = [
  { name: "대시보드", path: routePath.dashBoard, element: DashBoardPage },
  { name: "광고관리", path: routePath.adManagement, element: AdManagementPage },
];
