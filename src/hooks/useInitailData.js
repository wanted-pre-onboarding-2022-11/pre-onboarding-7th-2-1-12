import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { useTrendDataSelector } from "../features/trend/trendDataSlice";
import { getList } from "../features/trend/trendDataThunk";

const useInitailData = () => {
  const dispatch = useDispatch();
  const trendData = useTrendDataSelector();

  const handleInitailData = useCallback(() => {
    if (!trendData.data) dispatch(getList());
  }, [dispatch, trendData.data]);

  useEffect(() => {
    handleInitailData();
  }, [handleInitailData]);
};

export default useInitailData;
