import { css } from "styled-components";

const base = css`
  html,
  body {
    font-size: 14px;
    font-family: var(--font-sans-serif);
    height: 100%;
    color: var(--color-black);
  }

  *,
  *::before,
  *::after {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
  }

  #app {
    background: var(--color-gray-lightest);
    min-height: 100vh;
  }
`;

export default base;
