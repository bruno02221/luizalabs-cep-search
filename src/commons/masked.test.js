import masked from "./masked";

describe("masked", () => {
  it("formats the value when pattern is matched", () => {
    const value = "12345678";
    const expectedValue = "12345-678";
    const inputPattern = /^(\d{5})(\d{3})$/;
    const outputPattern = matches => {
      return matches[1] + "-" + matches[2];
    };
    expect(masked(inputPattern, outputPattern)(value)).toEqual(expectedValue);
  });

  it("keeps the value unformatted when pattern is not matched", () => {
    const value = "12345";
    const expectedValue = "12345";
    const inputPattern = /^(\d{5})(\d{3})$/;
    const outputPattern = matches => {
      return matches[1] + "-" + matches[2];
    };
    expect(masked(inputPattern, outputPattern)(value)).toEqual(expectedValue);
  });
});
