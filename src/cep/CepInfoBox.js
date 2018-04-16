import React from "react";
import styled from "styled-components";
import EmbeddedMap from "../commons/EmbeddedMap";
import Button from "../commons/Button";

const CepInfoBox = ({ data, onRequestClose }) => {
  const handleCloseButtonClick = () => {
    onRequestClose();
  };
  return (
    <Root>
      <Data>
        <CloseButton onClick={handleCloseButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseButton>
        <Street>{data.logradouro}</Street>
        <District>{data.bairro}</District>
        <CityAndState>{`${data.localidade} - ${data.uf}`}</CityAndState>
        <PostalCode>{data.cep}</PostalCode>
      </Data>
      <EmbeddedMap
        postalCode={data.cep}
        city={data.localidade}
        state={data.uf}
        street={data.logradouro}
        district={data.bairro}
      />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  background: var(--color-white);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.075);
`;

const Data = styled.section`
  padding: 12px;
`;

const Street = styled.h1`
  margin: 6px;
`;

const District = styled.p`
  margin: 6px;
`;

const CityAndState = styled.p`
  margin: 6px;
`;

const PostalCode = styled.p`
  margin: 6px;
`;

const CloseButton = Button.extend.attrs({
  "aria-label": "close"
})`
  position: absolute;
  top: 12px;
  right: 12px;
  border: 0;
  padding: 0;
  background: none;
  color: var(--colo-black);
`;

export default CepInfoBox;
