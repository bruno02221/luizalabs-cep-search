import React from "react";
import { render } from "react-dom";
import "./style";
import App from "./App";

render(<App />, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept();
}
