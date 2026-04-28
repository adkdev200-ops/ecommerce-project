import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(
          "http://127.0.0.1:8000/api/token/refresh/",
          { refresh: refreshToken }
        );

        const newAccess = res.data.access;

        
        localStorage.setItem("accessToken", newAccess);

        
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return API(originalRequest);

      } catch (err) {
        console.log("Refresh failed");

    
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;