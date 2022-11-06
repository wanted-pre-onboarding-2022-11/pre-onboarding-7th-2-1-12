import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdvertiseList } from "../components/Advertise";
import { BoardCard, Title } from "../components/common";
import { fetchAllAdvertise } from "../store/advertises";

const Advertise = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.advertises.data;
  });

  const handleEdit = (id) => {
    console.log(id);
  };

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

  return (
    <>
      <Title text="광고관리" />
      <BoardCard>
        <AdvertiseList advertises={data.ads} onEdit={handleEdit} />
      </BoardCard>
    </>
  );
};

export default Advertise;
