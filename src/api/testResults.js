import axiosInstance from "./axiosInstance";

export const fetchTestResults = async () => {
  const { data } = await axiosInstance.get("/testResults");
  return data;
};

export const createTestResult = async (result) => {
  const { data } = await axiosInstance.post("/testResults", result);
  return data;
};

export const deleteTestResult = async (id) => {
  await axiosInstance.delete(`/testResults/${id}`);
};
