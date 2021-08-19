import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListeningOnRoute from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <ListeningOnRoute aria-labelledby="route" />
    </Provider>
  );
};

export default App;
