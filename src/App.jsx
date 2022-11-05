import Router from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTrend } from "./store/trends";
import { fetchAllAdvertise } from "./store/advertises";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrend());
    dispatch(fetchAllAdvertise());
  }, [dispatch]);

  return <Router />;
}

export default App;
