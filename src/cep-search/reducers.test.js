import * as reducers from "./reducers";
import * as types from "./actionsTypes";

describe("reducers", () => {
  describe("cepReducer", () => {
    it("handles UPDATE_CEP", () => {
      const cep = "12345-678";
      expect(
        reducers.cepReducer(
          {},
          {
            type: types.UPDATE_CEP,
            cep
          }
        )
      ).toEqual(cep);
    });
  });

  describe("searchReducer", () => {
    describe("searchStatusReducer", () => {
      it("handles initial state", () => {
        expect(reducers.searchStatusReducer(undefined, {})).toEqual(null);
      });

      it("handles CEP_SEARCH_REQUEST", () => {
        expect(
          reducers.searchStatusReducer(undefined, {
            type: types.CEP_SEARCH_REQUEST
          })
        ).toEqual("searching");
      });

      it("handles CEP_SEARCH_SUCCESS", () => {
        expect(
          reducers.searchStatusReducer(undefined, {
            type: types.CEP_SEARCH_SUCCESS
          })
        ).toEqual("success");
      });

      it("handles CEP_SEARCH_NO_RESULTS", () => {
        expect(
          reducers.searchStatusReducer(undefined, {
            type: types.CEP_SEARCH_NO_RESULTS
          })
        ).toEqual("success");
      });

      it("handles CEP_SEARCH_FAILURE", () => {
        expect(
          reducers.searchStatusReducer(undefined, {
            type: types.CEP_SEARCH_FAILURE
          })
        ).toEqual("failure");
      });

      it("handles RESET_CEP_SEARCH", () => {
        expect(
          reducers.searchStatusReducer("success", {
            type: types.RESET_CEP_SEARCH
          })
        ).toEqual(null);
      });
    });

    describe("searchResultsReducer", () => {
      it("handles initial state", () => {
        expect(reducers.searchResultsReducer(undefined, {})).toEqual(null);
      });

      it("handles CEP_SEARCH_REQUEST", () => {
        expect(
          reducers.searchResultsReducer(undefined, {
            type: types.CEP_SEARCH_REQUEST
          })
        ).toEqual(null);
      });

      it("handles CEP_SEARCH_SUCCESS", () => {
        const data = {
          cep: "12345-678",
          localidade: "Miguelópolis"
        };
        expect(
          reducers.searchResultsReducer(undefined, {
            type: types.CEP_SEARCH_SUCCESS,
            data
          })
        ).toEqual(data);
      });

      it("handles CEP_SEARCH_NO_RESULTS", () => {
        expect(
          reducers.searchResultsReducer(undefined, {
            type: types.CEP_SEARCH_NO_RESULTS
          })
        ).toEqual(null);
      });

      it("handles CEP_SEARCH_FAILURE", () => {
        expect(
          reducers.searchResultsReducer(undefined, {
            type: types.CEP_SEARCH_FAILURE
          })
        ).toEqual(null);
      });

      it("handles RESET_CEP_SEARCH", () => {
        expect(
          reducers.searchResultsReducer(
            { localidade: "Miguelópolis" },
            {
              type: types.RESET_CEP_SEARCH
            }
          )
        ).toEqual(null);
      });
    });
  });
});
