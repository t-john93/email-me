import { combineReducers } from "redux";
import authReducer from "./authReducer";

//method to combine reducers to a single object
export default combineReducers({
    auth: authReducer
});