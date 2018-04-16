import * as types from "./actionsTypes";
import * as api from "./api";

export const updateCep = cep => ({
  type: types.UPDATE_CEP,
  cep
});

export const search = () => {
  return (dispatch, getState) => {
    dispatch(cepSearchRequest());

    const cep = getState().cepSearch.cep;

    return api
      .search(cep)
      .then(data => {
        if (data.error) {
          dispatch(cepSearchNoResults());
        } else {
          dispatch(cepSearchSuccess(data));
        }
      })
      .catch(error => {
        dispatch(cepSearchFailure(error));
      });
  };
};

const cepSearchRequest = () => ({
  type: types.CEP_SEARCH_REQUEST
});

const cepSearchSuccess = data => ({
  type: types.CEP_SEARCH_SUCCESS,
  data
});

const cepSearchNoResults = () => ({
  type: types.CEP_SEARCH_NO_RESULTS
});

const cepSearchFailure = error => ({
  type: types.CEP_SEARCH_FAILURE,
  error
});
