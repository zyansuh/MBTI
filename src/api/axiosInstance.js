import axios from "axios";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr", // API 서버의 URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (Request Interceptor)
// 필요하면 요청마다 토큰을 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (Response Interceptor)
axiosInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답 처리
  (error) => {
    // 인증 실패 시
    if (error.response && error.response.status === 401) {
      alert("인증이 만료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("token"); // 토큰 제거
      window.location.href = "/login"; // 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error); // 에러를 호출한 곳으로 전달
  }
);

export default axiosInstance;
