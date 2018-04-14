import React from "react";
import { render } from "react-dom";
import App from "./App";
import style from "./style";
import { injectGlobal } from "styled-components";

injectGlobal`
  ${style}
`;

render(<App />, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept();
}
