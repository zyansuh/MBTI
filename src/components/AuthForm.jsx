import React, { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "signup" ? "" : undefined, // 회원가입일 때만 닉네임 필드 활성화
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "signup" && !formData.nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!formData.id || !formData.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col">
        <label htmlFor="id" className="mb-2 text-sm font-medium text-gray-700">
          아이디
        </label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="아이디를 입력하세요"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>

      {mode === "signup" && (
        <div className="flex flex-col">
          <label htmlFor="nickname" className="mb-2 text-sm font-medium text-gray-700">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
