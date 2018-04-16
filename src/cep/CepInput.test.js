import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import CepInput from "./CepInput";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("CepInput", () => {
  it("formats the input value to CEP format", () => {
    const value = "12345678";
    const expectedValue = "12345-678";
    const wrapper = mount(<CepInput value={value} onChange={() => {}} />);
    expect(wrapper.find("input").props().value).toEqual(expectedValue);
  });

  it("keeps value unformatted when it's not compatible", () => {
    const value = "1234567";
    const expectedValue = "1234567";
    const wrapper = mount(<CepInput value={value} onChange={() => {}} />);
    expect(wrapper.find("input").props().value).toEqual(expectedValue);
  });
});
