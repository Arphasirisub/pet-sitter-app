import axios from "axios";
// 🐨 Todo: Exercise #6
//  ให้เขียน Logic ในการแนบ Token เข้าไปใน Header ของ Request
// เมื่อมีการส่ง Request จาก Client ไปหา Server
// ภายใน Callback Function axios.interceptors.request.use
// 🐨 Todo: Exercise #6
//  ให้เขียน Logic ในการรองรับเมื่อ Server ได้ Response กลับมาเป็น Error
// โดยการ Redirect ผู้ใช้งานไปที่หน้า Login และลบ Token ออกจาก Local Storage
// ภายใน Error Callback Function ของ axios.interceptors.response.use
function jwtInterceptor() {
  axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        window.localStorage.removeItem("token");
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
}

export default jwtInterceptor;
