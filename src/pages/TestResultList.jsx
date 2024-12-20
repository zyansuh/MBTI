import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTestResults } from "../api/testResults";

const TestResultList = () => {
  const { data: results, isLoading, error } = useQuery(["testResults"], fetchTestResults);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading test results.</p>;

  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          {result.mbti}: {result.description}
        </li>
      ))}
    </ul>
  );
};

export default TestResultList;
