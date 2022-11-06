import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { convDate, getDatesStartToLast } from "../../utils/convDate";
import { getFilterData, useTrendDataSelector } from "../../features/trend/trendDataSlice";

const CustomDatePicker = () => {
  const trendData = useTrendDataSelector();
  const dispatch = useDispatch();
  const [targetDate, setTargetDate] = useState({
    startDate: convDate(trendData.date[0]),
    endDate: convDate(trendData.date[trendData.date.length - 1]),
  });

  const handelDate = (dates) => {
    const [startDate, endDate] = dates;

    setTargetDate((prev) => {
      return {
        ...prev,
        startDate,
        endDate,
      };
    });

    if (startDate && endDate) {
      const dateList = getDatesStartToLast(startDate, endDate);
      dispatch(getFilterData({ date: dateList }));
    }
  };
  return (
    <DatePickerContainer>
      <DatePicker
        locale={ko}
        onChange={handelDate}
        dateFormat="yyyy년 MM월 dd일"
        selectsRange
        startDate={targetDate.startDate}
        endDate={targetDate.endDate}
        minDate={new Date("2022-02-01")}
        maxDate={new Date("2022-04-20")}
        customInput={<CustomInput />}
      />
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  min-width: 230px;
`;

const CustomInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  cursor: pointer;
`;

export default CustomDatePicker;
