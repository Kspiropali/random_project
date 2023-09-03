import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from "redux-thunk"

const composedFunctions = applyMiddleware(thunk);

const store = createStore(allReducers, composedFunctions);

export default store;
