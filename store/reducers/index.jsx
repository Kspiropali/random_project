import { combineReducers } from "redux";
import accountReducer from './accountReducer';

const allReducers = combineReducers({
    account: accountReducer
});

export default allReducers;
