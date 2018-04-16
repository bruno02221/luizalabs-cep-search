import React from "react";
import CepInput from "../cep/CepInput";
import Button from "../commons/Button";
import styled from "styled-components";

const CepSearchBox = ({ value, onChange, onRequestSearch, invalid }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!invalid) {
      onRequestSearch();
    }
  };

  const handleInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Consulta de CEP</Title>
      <SearchSet>
        <Label>
          CEP
          <CustomCepInput
            autofocus={true}
            name="input"
            placeholder="Ex.: 14530-000"
            value={value}
            onChange={handleInputChange}
            onKeyUp={handleInputChange}
          />
        </Label>
        <SearchButton disabled={invalid}>Pesquisar</SearchButton>
      </SearchSet>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--color-primary);
  margin: 0;
`;

const SearchSet = styled.fieldset`
  border: 0;
  margin-top: 12px;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const CustomCepInput = styled(CepInput)`
  margin: 0 6px 0 24px;
  height: 48px;
  font-size: 1.5rem;
  border-radius: 6px;
`;

const SearchButton = Button.extend`
  height: 48px;
  font-size: 1.5rem;
  border-radius: 6px;
`;

export default CepSearchBox;
