import { combineReducers } from "redux";
import AuthReducer  from "./Auth/AuthProfile";
import CategoryReducer from "./Category/Category";


const rootReducer = combineReducers({
  Auth :AuthReducer,
  Category:CategoryReducer
});

export default rootReducer;