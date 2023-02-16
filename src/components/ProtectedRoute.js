import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UseAuthContext();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
