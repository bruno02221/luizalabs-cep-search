import validator from "./validator";

describe("validator", () => {
  it("returns true for valid CEP", () => {
    expect(validator("14530000")).toBeTruthy();
    expect(validator("14530-000")).toBeTruthy();
  });

  it("returns false for invalid CEP", () => {
    expect(validator("123456789")).toBeFalsy();
    expect(validator("123456-789")).toBeFalsy();
    expect(validator("1234567")).toBeFalsy();
    expect(validator("1234-567")).toBeFalsy();
    expect(validator(undefined)).toBeFalsy();
    expect(validator(null)).toBeFalsy();
  });
});
