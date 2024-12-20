import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Axios Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      alert("인증이 만료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// 회원가입
export const register = async (userData) => {
  const response = await axiosInstance.post("/register", userData);
  return response.data;
};

// 로그인
export const login = async (credentials) => {
  const response = await axiosInstance.post("/login", credentials);
  const { accessToken, userId, avatar, nickname } = response.data;

  // 토큰 저장
  localStorage.setItem("token", accessToken);

  return { userId, avatar, nickname };
};

// 프로필 가져오기
export const getUserProfile = async () => {
  const response = await axiosInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// 프로필 업데이트
export const updateProfile = async (formData) => {
  const response = await axiosInstance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
