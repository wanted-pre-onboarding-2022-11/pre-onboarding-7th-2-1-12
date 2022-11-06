import React from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
// import { WeekImp } from "../../utils/weeklmp";

const DashboardPage = () => {
  const [selectedDay, setSelectedDay] = useState({});
  // const weekImp = new WeekImp();
  // console.log(weekImp.weekCal(selectedDay));
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
