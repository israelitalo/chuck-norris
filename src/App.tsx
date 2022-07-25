import React from "react";
import { AppRouters } from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <AppRouters />
      <GlobalStyle />
    </>
  );
};

export default App;
