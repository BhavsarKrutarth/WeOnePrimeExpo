import React, { useEffect } from "react";
import { Routes } from "./navigation";
import { Provider } from "react-redux";
import Store from "./redux";

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
