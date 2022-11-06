import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardCard, Title } from "../components/common";
import { fetchAllAdvertise } from "../store/advertises";

const Advertise = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.advertises.data;
  });

  useEffect(() => {
    if (!data) {
      dispatch(fetchAllAdvertise());
    }
  }, [dispatch, data]);

  if (!data) {
    return (
      <>
        <Title text="광고관리" />
        <span>로딩 중...</span>
      </>
    );
  }

  // TODO
  // 차트 렌더링
  return (
    <>
      <Title text="광고관리" />
      <BoardCard>광고아ㅏㅏㅏ</BoardCard>
    </>
  );
};

export default Advertise;
