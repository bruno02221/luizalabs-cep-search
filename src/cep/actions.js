import * as api from "./api";
import * as types from "./actionsTypes";

export const searchCep = cep => {
  return dispatch => {
    dispatch(searchCepRequest());

    return api
      .searchCep(cep)
      .then(data => {
        if (data.error) {
          dispatch(searchCepNoResults());
        } else {
          dispatch(searchCepSuccess(data));
        }
      })
      .catch(error => {
        dispatch(searchCepFailure(error));
      });
  };
};

const searchCepRequest = () => ({
  type: types.CEP_SEARCH_REQUEST
});

const searchCepNoResults = () => ({
  type: types.CEP_SEARCH_NO_RESULTS
});

const searchCepSuccess = data => ({
  type: types.CEP_SEARCH_SUCCESS,
  data
});

const searchCepFailure = error => ({
  type: types.CEP_SEARCH_FAILURE,
  error
});
