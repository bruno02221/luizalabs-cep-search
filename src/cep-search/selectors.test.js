import { isCepValid } from "./selectors";

describe("selectors", () => {
  describe("isCepValid", () => {
    it("works with valid CEP", () => {
      expect(isCepValid({ cep: "12345-678" })).toBeTruthy();
      expect(isCepValid({ cep: "12345678" })).toBeTruthy();
    });

    it("works with invalid CEP", () => {
      expect(isCepValid({ cep: "12345" })).toBeFalsy();
      expect(isCepValid({ cep: "123456789" })).toBeFalsy();
      expect(isCepValid({ cep: "123456-789" })).toBeFalsy();
      expect(isCepValid({ cep: null })).toBeFalsy();
      expect(isCepValid({ cep: undefined })).toBeFalsy();
    });
  });
});
