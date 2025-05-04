import { useLocation, Navigate } from "react-router-dom";

function Checkauth({ isAuthenticated, user, children }) {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "user") {
      return <Navigate to="/user/home" />;
    } else  {
      return <Navigate to="/publisher/home" />;
    }
  }
  if (
    isAuthenticated &&
    user?.role === "publisher" &&
    location.pathname.includes("user")
  ) {
    return <Navigate to="/publisher/home" />;
  }
  if (
    isAuthenticated &&
    user?.role === "user" &&
    location.pathname.includes("publisher")
  ) {
    return <Navigate to="/user/home" />;
  }
    return children;

}

export default Checkauth;
