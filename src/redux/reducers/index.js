import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./message";
import parish from "./parishReducer";
import shepherd from "./shepherdReducer";
export default combineReducers({
  authReducer,
  messageReducer,
  parish,
  shepherd,
});
