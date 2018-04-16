export const cepValidator = cep => {
  return /^(\d{8}|\d{5}-\d{3})$/.test(cep);
};

export default cepValidator;
