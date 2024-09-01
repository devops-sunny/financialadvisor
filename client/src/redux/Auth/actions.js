import { LoginIn, RegisterIn } from "../../services/AuthServices";
import { AuthDetails } from "./AuthProfile";

export const loginAction = (data, navigate) => (dispatch) => {
    LoginIn(data)
      .then((res) => {
        localStorage.setItem("Token", res?.data.token);
        localStorage.setItem("role", res?.data?.user?.role);
        if (res?.data?.user?.role === "Admin") {
          navigate("/dashboard");
        } else if (res?.data?.user?.role === "FinancialAdviser") {
          navigate("/FinancialAdviserDashboard/FinancialAdviser/Appointments");
        }
        dispatch(AuthDetails(res));
      })
      .catch((error) => {
        console.log("error", error);
      });
};

export const registerAction = (data ,navigate) => (dispatch) => {
    RegisterIn(data)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("error", error);
      });
};
