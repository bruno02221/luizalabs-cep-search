import "normalize.css";
import theme from "./theme";
import base from "./base";
import { css, injectGlobal } from "styled-components";

injectGlobal`
  ${theme};
  ${base};
`;
