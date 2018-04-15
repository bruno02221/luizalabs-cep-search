import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as api from "./api";
import * as actions from "./actions";
import * as types from "./actionsTypes";

const mockStore = configureMockStore([thunk]);

describe("actions", () => {
  describe("searchCep", () => {
    it("creates CEP_SEARCH_SUCCESS when searching with success", () => {
      const data = {
        cep: "01000-000",
        localidade: "São Paulo"
      };
      api.searchCep.impl = () => Promise.resolve(data);
      const store = mockStore({});
      return store.dispatch(actions.searchCep(data.cep)).then(() => {
        const expectedActions = [
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_SUCCESS, data }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("creates CEP_SEARCH_NO_RESULTS when results data contains an error field", () => {
      const mockData = {
        error: true
      };
      api.searchCep.impl = () => Promise.resolve(mockData);
      const store = mockStore({});
      return store.dispatch(actions.searchCep("99999999")).then(() => {
        const expectedActions = [
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_NO_RESULTS }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("creates CEP_SEARCH_FAILURE when an error occur", () => {
      const error = "Any error";
      api.searchCep.impl = () => Promise.reject(error);
      const store = mockStore({});
      return store.dispatch(actions.searchCep("invalid cep")).then(() => {
        const expectedActions = [
          { type: types.CEP_SEARCH_REQUEST },
          { type: types.CEP_SEARCH_FAILURE, error }
        ];
      });
    });
  });
});
