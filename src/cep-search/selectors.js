import cepValidator from "../cep/validator";

export const isCepValid = state => {
  return cepValidator(state.cep);
};
