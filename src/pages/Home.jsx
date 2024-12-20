import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">MBTI 테스트</h1>
      <p className="text-lg text-gray-700 mt-4">
        자신의 성격 유형을 확인하고 재미있는 테스트를 즐겨보세요!
      </p>
      <Link
        to="/login"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        로그인하기
      </Link>
    </div>
  );
};

export default Home;
