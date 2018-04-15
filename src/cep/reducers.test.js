import { cepSearchReducer } from "./reducers";
import * as types from "./actionsTypes";

describe("reducers", () => {
  describe("cepSearchReducer", () => {
    it("handles initial state", () => {
      expect(cepSearchReducer(undefined, {})).toEqual({
        status: "idle"
      });
    });

    it("handles CEP_SEARCH_REQUEST", () => {
      expect(
        cepSearchReducer(
          {},
          {
            type: types.CEP_SEARCH_REQUEST
          }
        )
      ).toEqual({
        status: "searching"
      });
    });

    it("handles CEP_SEARCH_SUCCESS", () => {
      const data = {
        localidade: "São Paulo"
      };
      expect(
        cepSearchReducer(
          {},
          {
            type: types.CEP_SEARCH_SUCCESS,
            data
          }
        )
      ).toEqual({
        status: "success",
        data
      });
    });

    it("handles CEP_SEARCH_NO_RESULTS", () => {
      expect(
        cepSearchReducer(
          {},
          {
            type: types.CEP_SEARCH_NO_RESULTS
          }
        )
      ).toEqual({
        status: "success",
        data: null
      });
    });

    it("handles CEP_SEARCH_FAILURE", () => {
      const error = "Any error";
      expect(
        cepSearchReducer(
          {},
          {
            type: types.CEP_SEARCH_FAILURE,
            error
          }
        )
      ).toEqual({
        status: "error",
        error
      });
    });
  });
});
