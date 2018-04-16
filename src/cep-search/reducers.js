import * as types from "./actionsTypes";
import { combineReducers } from "redux";

export const cepReducer = (state = null, action) => {
  switch (action.type) {
    case types.UPDATE_CEP:
      return action.cep;
    default:
      return state;
  }
};

export const searchStatusReducer = (state = null, action) => {
  switch (action.type) {
    case types.CEP_SEARCH_REQUEST:
      return "searching";
    case types.CEP_SEARCH_SUCCESS:
    case types.CEP_SEARCH_NO_RESULTS:
      return "success";
    case types.CEP_SEARCH_FAILURE:
      return "failure";
    default:
      return state;
  }
};

export const searchResultsReducer = (state = null, action) => {
  switch (action.type) {
    case types.CEP_SEARCH_REQUEST:
    case types.CEP_SEARCH_NO_RESULTS:
    case types.CEP_SEARCH_FAILURE:
      return null;
    case types.CEP_SEARCH_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export const searchReducer = combineReducers({
  status: searchStatusReducer,
  results: searchResultsReducer
});

export default combineReducers({
  cep: cepReducer,
  search: searchReducer
});
