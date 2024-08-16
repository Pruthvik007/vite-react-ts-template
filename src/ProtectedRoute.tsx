import { Navigate, Outlet } from "react-router-dom";
interface ProtectedRouteProps {
  role: string;
}

const getUserRole = () => {
  return "ALL";
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role }) => {
  const userRole = getUserRole();
  return role === "*" || userRole === role ? (
    <Outlet />
  ) : (
    <Navigate to="/notfound" />
  );
};

export default ProtectedRoute;
