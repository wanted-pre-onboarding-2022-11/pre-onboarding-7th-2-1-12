import { useEffect, useState } from "react";
import { getData } from "./utils";

const SAMPLE_DATA = ["apple", "banana", "cherry"];

function App() {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    getData(SAMPLE_DATA).then((data) => setFruits(data));
  }, []);

  return (
    <>
      <h1>Hello React!</h1>
      {fruits ? (
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <h3>로딩 중...</h3>
      )}
    </>
  );
}

export default App;
