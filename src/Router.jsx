import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NAvbar"; // 네비게이션 바 컴포넌트
import ProtectedRoute from "./components/ProtectedRoute"; // 보호된 라우트를 처리하는 컴포넌트
import Home from "./pages/Home"; // 홈 페이지
import Login from "./pages/Login"; // 로그인 페이지
import Signup from "./pages/Signup"; // 회원가입 페이지
import Profile from "./pages/Profile"; // 프로필 페이지
import TestPage from "./pages/TestPage"; // 테스트 페이지
import ResultsPage from "./pages/ResultsPage"; // 결과 페이지

const AppRouter = () => {
  // 인증 상태 관리
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 앱 로드 시 토큰이 있는지 확인하여 인증 상태를 설정
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <Router>
      {/* 네비게이션 바: 인증 상태와 로그아웃 기능을 전달 */}
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* 공개 경로 */}
        <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> {/* 로그인 */}
        <Route path="/signup" element={<Signup />} /> {/* 회원가입 */}

        {/* 보호된 경로 */}
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login" />
          }
        >
          {/* 보호된 라우트는 ProtectedRoute 내부의 Outlet을 통해 렌더링됩니다 */}
          <Route path="/profile" element={<Profile />} /> {/* 프로필 */}
          <Route path="/test" element={<TestPage />} /> {/* 테스트 */}
          <Route path="/results" element={<ResultsPage />} /> {/* 결과 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
