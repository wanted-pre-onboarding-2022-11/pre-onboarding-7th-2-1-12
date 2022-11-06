import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { getList } from "../redux/trendDataSlice";

const useInitailData = () => {
  const dispatch = useDispatch();
  const { trendData } = useSelector((state) => state);

  const handleInitailData = useCallback(() => {
    if (!trendData.data) dispatch(getList());
  }, [dispatch, trendData.data]);

  useEffect(() => {
    handleInitailData();
  }, [handleInitailData]);
};

export default useInitailData;
