import { combineReducers } from "redux";
// Element
import examReducer from "./examReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
    examReducer,
    loginReducer,
});
export default allReducers;
