import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Router from "./Routers/Router";
// import { getData } from "./utils";

// const SAMPLE_DATA = ["apple", "banana", "cherry"];

const App = () => {
  // const [fruits, setFruits] = useState(null);

  // useEffect(() => {
  //   getData(SAMPLE_DATA).then((data) => setFruits(data));
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
