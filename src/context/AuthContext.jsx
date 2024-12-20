import React, { createContext, useState, useContext, useEffect } from "react";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // 로컬 스토리지에서 토큰 확인 및 유저 정보 초기화
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // 추가적으로 API 호출로 사용자 정보를 가져올 수도 있음
    }
  }, []);

  // 로그인 함수
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setUser(userData);
  };

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅: Context를 편리하게 사용할 수 있는 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};
