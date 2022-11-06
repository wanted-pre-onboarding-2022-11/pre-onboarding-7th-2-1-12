import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setState } from "../../features/advertisements/filterStateSlice";

const SubHeader = ({ options }) => {
  const selectRef = useRef();
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(setState(e.target.value));
  };

  useEffect(() => {
    dispatch(setState(selectRef.current.value));
  }, [dispatch]);
  return (
    <S.SubHeader>
      <S.Select ref={selectRef} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
      <S.AdMakeButton>광고만들기</S.AdMakeButton>
    </S.SubHeader>
  );
};

const S = {
  SubHeader: styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
  `,
  AdMakeButton: styled.button`
    width: 108px;
    height: 40px;
    left: 1251px;
    top: 230px;
    text-align: center;
    /* Primary */

    background: #586cf5;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  `,
  Select: styled.select`
    background: #ffffff;
    /* grey_100 */

    border: 1px solid #d1d8dc;
    border-radius: 10px;
  `,
};
export default SubHeader;
