import cepValidator from "../cep/validator";

export const isCepValid = cep => {
  return cepValidator(cep);
};
