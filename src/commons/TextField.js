import styled from "styled-components";

const TextField = styled.input`
  height: 32px;
  border: 1px solid var(--color-gray-lighter);
  padding: 0 8px;

  &::placeholder {
    color: var(--color-gray-light);
  }
`;

export default TextField;
