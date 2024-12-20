import React from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";

const TestPage = () => {
  const handleTestSubmit = (answers) => {
    const result = calculateMBTI(answers);
    console.log("MBTI 결과:", result);
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
