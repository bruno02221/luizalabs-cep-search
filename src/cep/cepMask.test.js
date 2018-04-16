import cepMask from "./cepMask";

describe("cepMask", () => {
  it("formats CEP when input is compatible", () => {
    const value = "12345678";
    const expectedValue = "12345-678";
    expect(cepMask(value)).toEqual(expectedValue);
  });

  it("keeps CEP unformatted when input is incompatible", () => {
    const value = "1234567";
    const expectedValue = "1234567";
    expect(cepMask(value)).toEqual(expectedValue);
  });
});
