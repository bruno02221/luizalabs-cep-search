import { css } from "styled-components";

const base = css`
  html,
  body {
    font-size: 14px;
    font-family: var(--font-sans-serif);
    height: 100%;
  }

  *,
  *::before,
  *::after {
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
  }
`;

export default base;
