import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입 성공!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">회원가입</h1>
      <AuthForm mode="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
