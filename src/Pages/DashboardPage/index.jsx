import React from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
// import { WeekImp } from "../../utils/weeklmp";
// import { useGetData } from "../../hooks/useGetData";
// import { DashboardImp } from "../../utils/dashboard";

const DashboardPage = () => {
  const [selectedDay, setSelectedDay] = useState({});
  // const weekImp = new WeekImp();
  // const weeks = weekImp.weekCal(selectedDay);
  // const db = useGetData(false);
  // const dashboard = new DashboardImp(db?.payload?.report?.daily);
  // const weeksData = dashboard.weeksData(weeks);

  return (
    <>
      <DayPicker
        mode="range"
        min={7}
        max={7}
        selected={selectedDay}
        onSelect={setSelectedDay}
        fromMonth={new Date(2022, 1)}
        toDate={new Date(2022, 3, 20)}
      />
      <div>DashboardPage</div>;
    </>
  );
};

export default DashboardPage;
