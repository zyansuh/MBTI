import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // AuthContext에서 제공하는 logout 함수 호출
    alert("로그아웃 되었습니다.");
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MBTI 테스트
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm">
                {`Welcome, ${user?.nickname || "User"}!`}
              </span>
              <Link to="/profile" className="hover:underline">
                프로필
              </Link>
              <Link to="/test" className="hover:underline">
                테스트
              </Link>
              <Link to="/results" className="hover:underline">
                결과
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                로그인
              </Link>
              <Link to="/signup" className="hover:underline">
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
