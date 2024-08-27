import { combineReducers } from "redux";
import AuthReducer  from "./Auth/AuthProfile.js";

const rootReducer = combineReducers({
  Auth :AuthReducer,
});

export default rootReducer;