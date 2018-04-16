import React from "react";
import CepInput from "../cep/CepInput";
import Button from "../commons/Button";

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
    <form onSubmit={handleSubmit}>
      <h1>Consultar</h1>
      <fieldset>
        <label>
          CEP
          <CepInput
            name="input"
            placeholder="Ex.: 14530-000"
            value={value}
            onChange={handleInputChange}
          />
        </label>
        <Button disabled={invalid}>Pesquisar</Button>
      </fieldset>
    </form>
  );
};

export default CepSearchBox;
