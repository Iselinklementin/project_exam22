import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/AuthContext";

function Auth() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      return router.push("/");
    }
  }, []);
}

export default Auth;
