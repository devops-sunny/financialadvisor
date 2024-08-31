import { combineReducers } from "redux";
import AuthReducer  from "./Auth/AuthProfile";
import CategoryReducer from "./Category/Category";
import SubCategoryReducer from "./SubCategory/SubCategory";
import FaqsReducer from "./Faq/Faq";
import PrivacyReducer from "./Privacy/Privacy";
import TermsReducer from "./Terms/Terms";
import UsersReducer from "./Users/Users";
import financialAdvisorsReducer from "./FinancialAdvisors/FinancialAdvisors";
import ProductReducer from "./Product/Products"
import AppointmentsReducer from "./Appointments/Appointments"

const rootReducer = combineReducers({
  Auth :AuthReducer,
  Category:CategoryReducer,
  SubCategory: SubCategoryReducer,
  Faq:FaqsReducer,
  privacy:PrivacyReducer,
  terms:TermsReducer,
  users:UsersReducer,
  financialAdvisors:financialAdvisorsReducer,
  Product:ProductReducer,
  Appointments:AppointmentsReducer
});

export default rootReducer;