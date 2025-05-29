import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let role = "admin";

  return role == "admin" ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
