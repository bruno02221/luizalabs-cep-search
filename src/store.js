import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cepSearchReducer from "./cep-search/reducers";

const appReducer = combineReducers({
  cepSearch: cepSearchReducer
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
