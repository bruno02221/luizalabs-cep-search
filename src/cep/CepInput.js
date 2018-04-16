import React from "react";
import TextField from "../commons/TextField";
import cepMask from "./cepMask";

const CepInput = ({ value, ...rest }) => {
  return <CepInputField value={cepMask(value)} {...rest} />;
};

const CepInputField = TextField.extend``;

export default CepInput;
