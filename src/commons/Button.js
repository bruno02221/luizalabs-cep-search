import styled from "styled-components";

const Button = styled.button`
  background: var(--color-gray-lighter);
  color: var(--color-black);
  border: 0;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
  &[disabled] {
    background: var(--color-gray-lighter);
    color: var(--color-gray-light);
  }
`;

export default Button;
