
// ----------------------------------------------------------------------

import { Helmet } from "react-helmet-async";
import Register from "../sections/auth/Register";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Register | Minimal UI</title>
      </Helmet>

      <Register />
    </>
  );
}
