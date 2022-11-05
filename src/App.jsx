import Router from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTrends } from "./store/trends";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrends());
  }, [dispatch]);

  return <Router />;
}

export default App;
