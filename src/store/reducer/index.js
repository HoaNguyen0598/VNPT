import { combineReducers } from "redux";
// Element
import examReducer from "./examReducer";
import loginReducer from "./loginReducer";
import breadcrumbReducer from './breadcrumbReducer';

const allReducers = combineReducers({
    examReducer,
    loginReducer,
    breadcrumbReducer,
});
export default allReducers;
