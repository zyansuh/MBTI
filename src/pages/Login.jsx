import React from "react";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const user = await login(formData);
      alert("로그인 성공!");
      navigate("/profile"); // 로그인 후 프로필 페이지로 이동
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>
      <AuthForm mode="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
