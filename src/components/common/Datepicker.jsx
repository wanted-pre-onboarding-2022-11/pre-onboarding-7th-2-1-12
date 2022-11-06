import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSelectedData } from "app/module/trendSlice";
import { stringDate } from "utils/day";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Datepicker = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      dispatch(getSelectedData([stringDate(start), stringDate(end)]));
    }
  };

  return (
    <DatePicker
      locale={ko}
      onChange={handleDate}
      selectsRange
      startDate={startDate}
      endDate={endDate}
      minDate={new Date("2022-02-01")}
      maxDate={new Date("2022-04-20")}
      placeholderText="날짜를 선택해주세요"
      dateFormat="yyyy년 MM월 dd일"
    />
  );
};

export default Datepicker;
