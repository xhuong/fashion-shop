import React from "react";
import { useSelector } from "react-redux";
import RequiredLoginPage from "../../pages/RequiredLoginPage";

const ProtectedRouter = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <RequiredLoginPage />;
  }
};

export default ProtectedRouter;
