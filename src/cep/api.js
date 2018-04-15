export const searchCep = cep => {
  if (searchCep.impl) {
    return searchCep.impl(cep);
  }

  // TODO: implement search cep
  return Promise.reject("Not implemented yet");
};
