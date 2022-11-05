import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAdList } from "../store/adSlice";

export const useGetData = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState();
  const fetched = useCallback(async () => {
    dispatch(getAdList()).then((res) => setList(res));
  }, [dispatch]);

  useEffect(() => {
    fetched();
  }, [fetched]);

  return list;
};
