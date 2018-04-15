import * as types from "./actionsTypes";
import { combineReducers } from "redux";

export const cepSearchReducer = (state = { status: "idle" }, action) => {
  switch (action.type) {
    case types.CEP_SEARCH_REQUEST:
      return {
        status: "searching"
      };
    case types.CEP_SEARCH_NO_RESULTS:
      return {
        status: "success",
        data: null
      };
    case types.CEP_SEARCH_SUCCESS:
      return {
        status: "success",
        data: action.data
      };
    case types.CEP_SEARCH_FAILURE:
      return {
        status: "error",
        error: action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  search: cepSearchReducer
});
