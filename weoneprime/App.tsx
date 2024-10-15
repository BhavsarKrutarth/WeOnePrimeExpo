import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes } from "./Sources/navigation";
import Store from "./Sources/redux";
// import { Routes } from "./navigation";
// import { Provider } from "react-redux";
// import Store from "./redux";

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
