import { useLocation, Navigate } from "react-router-dom";

function Checkauth({ isAuthenticated, user, children }) {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname === "/auth/login" ||
      location.pathname === "/auth/register"
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname === "/auth/login" ||
      location.pathname === "/auth/register")
  ) {
    if (user?.role === "user") {
      return <Navigate to="/user/home" />;
    } else if (user?.role === "publisher") {
      return <Navigate to="/publisher/home" />;
    }
  }
  if (
    isAuthenticated &&
    user?.role === "publisher" &&
    location.pathname === "/user/home"
  ) {
    return <Navigate to="/publisher/home" />;
  }
  if (
    isAuthenticated &&
    user?.role === "user" &&
    location.pathname === "/publisher/home"
  ) {
    return <Navigate to="/user/home" />;
  }
    return children;

}

export default Checkauth;
