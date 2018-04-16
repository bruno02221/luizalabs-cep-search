import * as types from "./actionsTypes";
import * as actions from "./actions";
import * as api from "./api";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);

describe("actions", () => {
  describe("updateCep", () => {
    it("creates UPDATE_CEP", () => {
      const cep = "12345-678";
      expect(actions.updateCep(cep)).toEqual({
        type: types.UPDATE_CEP,
        cep
      });
    });
  });

  describe("search", () => {
    it("creates CEP_SEARCH_SUCCESS when success", () => {
      const cep = "12345-678";
      const data = {
        cep,
        localidade: "Miguelópolis"
      };
      api.search.impl = () => Promise.resolve(data);
      const store = mockStore({
        cepSearch: {
          cep
        }
      });
      return store.dispatch(actions.search()).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_SUCCESS, data }
        ]);
      });
    });

    it("creates CEP_SEARCH_NO_RESULTS when no results are found", () => {
      const cep = "12345-678";
      const data = {
        error: true
      };
      api.search.impl = () => Promise.resolve(data);
      const store = mockStore({
        cepSearch: {
          cep
        }
      });
      return store.dispatch(actions.search()).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_NO_RESULTS }
        ]);
      });
    });

    it("creates CEP_SEARCH_FAILURE when failure", () => {
      const cep = "12345-678";
      const error = "Any error";
      api.search.impl = () => Promise.reject(error);
      const store = mockStore({
        cepSearch: {
          cep
        }
      });
      return store.dispatch(actions.search()).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_FAILURE, error }
        ]);
      });
    });
  });
});
