import { combineReducers } from "redux";
import accountReducer from './accountReducer';

const allReducers = combineReducers({
    pokemon: accountReducer
});

export default allReducers;
