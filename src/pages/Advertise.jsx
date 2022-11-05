import React from "react";
import { useSelector } from "react-redux";
import { BoardCard, Title } from "../components/common";

const Advertise = () => {
  const data = useSelector((state) => {
    return state.advertises.data;
  });

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
