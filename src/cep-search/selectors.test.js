import { isCepValid } from "./selectors";

describe("selectors", () => {
  describe("isCepValid", () => {
    it("works with valid CEP", () => {
      expect(isCepValid("12345-678")).toBeTruthy();
      expect(isCepValid("12345678")).toBeTruthy();
    });

    it("works with invalid CEP", () => {
      expect(isCepValid("12345")).toBeFalsy();
      expect(isCepValid("123456789")).toBeFalsy();
      expect(isCepValid("123456-789")).toBeFalsy();
      expect(isCepValid(null)).toBeFalsy();
      expect(isCepValid(undefined)).toBeFalsy();
    });
  });
});
