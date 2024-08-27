import { combineReducers } from "redux";
import AuthReducer  from "./Auth/AuthProfile";

const rootReducer = combineReducers({
  Auth :AuthReducer,
});

export default rootReducer;