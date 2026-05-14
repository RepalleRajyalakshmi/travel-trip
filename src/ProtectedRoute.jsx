import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export default ProtectedRoute;
