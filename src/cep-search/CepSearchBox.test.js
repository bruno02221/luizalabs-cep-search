import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import CepSearchBox from "./CepSearchBox";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("CepSearchBox", () => {
  it("is wrapped in a form", () => {
    const wrapper = mount(<CepSearchBox />);
    expect(wrapper.find("form").length).toBe(1);
  });

  it("renders a title", () => {
    const wrapper = mount(<CepSearchBox />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("renders a label for the input field", () => {
    const wrapper = mount(<CepSearchBox />);
    expect(wrapper.find("label").length).toBe(1);
  });

  it("renders an input for cep", () => {
    const wrapper = mount(<CepSearchBox />);
    expect(wrapper.find("input").find({ name: "input" }).length).toBe(1);
  });

  it("renders a search button", () => {
    const wrapper = mount(<CepSearchBox />);
    expect(wrapper.find("button").length).toBe(1);
  });

  describe("when the invalid prop is passed", () => {
    it("disables the search button", () => {
      const wrapper = mount(<CepSearchBox invalid />);
      expect(wrapper.find("button").props().disabled).toBeTruthy();
    });

    it("does not call onRequestSearch when form is submitted", () => {
      const onRequestSearch = jest.fn();
      const wrapper = mount(
        <CepSearchBox invalid onRequestSearch={onRequestSearch} />
      );
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(onRequestSearch.mock.calls.length).toBe(0);
    });
  });

  it("calls onChange for every change in the cep input", () => {
    const onChange = jest.fn();
    const wrapper = mount(<CepSearchBox onChange={onChange} />);
    wrapper
      .find("input")
      .find({ name: "input" })
      .simulate("change");
    expect(onChange.mock.calls.length).toBe(1);
  });

  it("calls onRequestSearch when the form is submitted", () => {
    const onRequestSearch = jest.fn();
    const wrapper = mount(
      <CepSearchBox onRequestSearch={onRequestSearch} value={"12345-678"} />
    );
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(onRequestSearch.mock.calls.length).toBe(1);
  });
});
