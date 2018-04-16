const API = "https://viacep.com.br/ws/{cep}/json/";

export const search = cep => {
  if (search.impl) {
    return search.impl(cep);
  }
  return fetch(API.replace("{cep}", cep)).then(resp => resp.json());
};
