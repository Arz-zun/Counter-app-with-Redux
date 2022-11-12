// Root Reducer
import { isLogin } from "./IsLogin";
import Counter from "./Counter";
import { combineReducers } from "redux";
const rootReducer=combineReducers({
    Counter,
    isLogin

});
export default rootReducer;