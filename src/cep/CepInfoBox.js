import React from "react";
import styled from "styled-components";
import EmbeddedMap from "../commons/EmbeddedMap";

const CepInfoBox = ({ data }) => {
  return (
    <Root>
      <Street>{data.logradouro}</Street>
      <District>{data.bairro}</District>
      <CityAndState>{`${data.localidade} - ${data.uf}`}</CityAndState>
      <PostalCode>{data.cep}</PostalCode>
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

const Root = styled.div``;

const Street = styled.h1``;

const District = styled.p``;

const CityAndState = styled.p``;

const PostalCode = styled.p``;

export default CepInfoBox;
