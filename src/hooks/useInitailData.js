import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { getList } from "../features/trend/trendDataSlice";

const useInitailData = () => {
  const dispatch = useDispatch();
  const trendData = useSelector((state) => state.trendDataReducer);

  const handleInitailData = useCallback(() => {
    if (!trendData.data) dispatch(getList());
  }, [dispatch, trendData.data]);

  useEffect(() => {
    handleInitailData();
  }, [handleInitailData]);
};

export default useInitailData;
