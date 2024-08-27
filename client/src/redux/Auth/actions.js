import { LoginIn, RegisterIn } from "src/services/AuthServices";
import { AuthDetails } from "./AuthProfile";

export const loginAction = (data ,navigate) => {
    return function (dispatch) {
        LoginIn(data)
          .then((res) => {

            localStorage.setItem("Token",res?.token)
            localStorage.setItem("role",res?.role)
            
            if (res?.role === "Admin") {
              navigate("/Admin")
            }
            if (res?.role === "FinancialAdviser") {
              navigate("/FinancialAdviser")
            }
           dispatch(AuthDetails(res));
          })
          .catch((error) => {
            console.log("error", error);
          });
      };
};

export const registerAction = (data) => {
    return function (dispatch) {
        RegisterIn(data)
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log("error", error);
          });
      };
};

  