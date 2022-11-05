import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Router from "./Routers/Router";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
};

export default App;
