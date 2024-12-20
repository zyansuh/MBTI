import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ redirectTo = "/login" }) => {
  const { isAuthenticated } = useAuth(); // AuthContext에서 인증 상태 가져오기

  if (!isAuthenticated) {
    // 인증되지 않은 경우 리다이렉트
    return <Navigate to={redirectTo} replace />;
  }

  // 인증된 경우 하위 컴포넌트 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
