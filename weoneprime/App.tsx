import React from "react";
import { Routes } from "./Sources/navigation";
import { useCustomFonts } from "./Sources/theme";

const App = () => {
  useCustomFonts();
  return <Routes/>;
};

export default App;
