import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import CepInfoBox from "./CepInfoBox";
import EmbeddedMap from "../commons/EmbeddedMap";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("CepInfoBox", () => {
  let data;

  beforeAll(() => {
    data = {
      cep: "02050-010",
      logradouro: "Rua Miguel Mentem",
      complemento: "",
      bairro: "Vila Guilherme",
      localidade: "São Paulo",
      uf: "SP",
      unidade: "",
      ibge: "3550308",
      gia: "1004"
    };
  });

  it("renders a text with 'logradouro' value", () => {
    const wrapper = mount(<CepInfoBox data={data} />);
    expect(wrapper.find("h1").find({ children: data.logradouro }).length).toBe(
      1
    );
  });

  it("renders a paragraph with 'bairro' value", () => {
    const wrapper = mount(<CepInfoBox data={data} />);
    expect(wrapper.find("p").find({ children: data.bairro }).length).toBe(1);
  });

  it("renders a paragraph with 'localidade - uf' values", () => {
    const wrapper = mount(<CepInfoBox data={data} />);
    const children = data.localidade + " - " + data.uf;
    expect(wrapper.find("p").find({ children }).length).toBe(1);
  });

  it("renders a paragraph with 'CEP' value", () => {
    const wrapper = mount(<CepInfoBox data={data} />);
    expect(wrapper.find("p").find({ children: data.cep }).length).toBe(1);
  });

  it("renders a EmbeddedMap", () => {
    const wrapper = shallow(<CepInfoBox data={data} />);
    expect(wrapper.find(EmbeddedMap).length).toBe(1);
  });
});
