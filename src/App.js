import React from "react";
import CepSearch from "./cep-search";
import * as cepSearchApi from "./cep-search/api";
import store from "./store";
import { Provider } from "react-redux";

// Mocks the cep search api call
cepSearchApi.search.impl = cep => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (cep === "14530-000") {
        resolve({
          cep: "14530-000",
          logradouro: "Avenida Antônio Alves Filgueira",
          complemento: "",
          bairro: "Centro",
          localidade: "São Paulo",
          uf: "SP",
          unidade: "",
          ibge: "19000"
        });
      } else if (cep === "02050-010") {
        resolve({
          cep: "02050-010",
          logradouro: "Rua Miguel Mentem",
          complemento: "",
          bairro: "Vila Guilherme",
          localidade: "São Paulo",
          uf: "SP",
          unidade: "",
          ibge: "3550308",
          gia: "1004"
        });
      } else {
        resolve({ error: true });
      }
    }, Math.floor(Math.random() * 2000));
  });
};

const App = () => (
  <Provider store={store}>
    <CepSearch />
  </Provider>
);

export default App;
