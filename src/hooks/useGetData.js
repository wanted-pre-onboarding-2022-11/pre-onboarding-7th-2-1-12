import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getList } from "../store/listSlice";

export const useGetData = (isAd) => {
  const dispatch = useDispatch();
  const [list, setList] = useState();
  const fetched = useCallback(async () => {
    dispatch(getList(isAd)).then((res) => setList(res));
  }, [dispatch, isAd]);

  useEffect(() => {
    fetched();
  }, [fetched]);

  return list;
};
