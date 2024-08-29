import { combineReducers } from "redux";
import AuthReducer  from "./Auth/AuthProfile";
import CategoryReducer from "./Category/Category";
import SubCategoryReducer from "./SubCategory/SubCategory";


const rootReducer = combineReducers({
  Auth :AuthReducer,
  Category:CategoryReducer,
  SubCategory: SubCategoryReducer
});

export default rootReducer;