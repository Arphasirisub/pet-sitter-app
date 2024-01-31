import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import jwtInterceptor from "../utils/jwtInterceptor";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  jwtInterceptor();

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const register = async (data) => {
    // 🐨 Todo: Exercise #2
    //  ให้เขียน Logic ของ Function `register` ตรงนี้
    //  Function register ทำหน้าที่สร้าง Request ไปที่ API POST /register
    //  ที่สร้างไว้ด้านบนพร้อมกับ Body ที่กำหนดไว้ในตารางที่ออกแบบไว้

    await axios.post("http://localhost:4000/authentication/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    // 🐨 Todo: Exercise #4
    //  ให้เขียน Logic ของ Function `login` ตรงนี้
    //  Function `login` ทำหน้าที่สร้าง Request ไปที่ API POST /login
    //  ที่สร้างไว้ด้านบนพร้อมกับ Body ที่กำหนดไว้ในตารางที่ออกแบบไว้
    console.log(data);
    const response = await axios.post(
      "http://localhost:4000/authentication/login",
      data
    );

    const token = response.data.token;
    const role = response.data.role;

    // Store the token and role separately in local storage
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    console.log(localStorage);
    console.log(response.data);
    const userDataFromToken = jwtDecode(token);
    console.log(userDataFromToken);
    //userDataFromToken =  {
    //   aud: "authenticated",
    //   exp: 1706711579,
    //   iat: 1706707979,
    //   iss: "https://wajvygdhtyqvxzpizdqw.supabase.co/auth/v1",
    //   sub: "51d67a8e-51fa-415f-b051-11b10bfcfa96",
    //   email: "peerawet1996@gmail.com",
    //   phone: "",
    //   app_metadata: {
    //     provider: "email",
    //     providers: ["email"]
    //   },
    //   user_metadata: {},
    //   role: "authenticated",
    //   aal: "aal1",
    //   amr: [
    //     {
    //       method: "password",
    //       timestamp: 1706707979
    //     }
    //   ],
    //   session_id: "80091d10-f1a1-4481-865a-05ba7791b067"
    // };

    setState({ ...state, user: userDataFromToken });

    // Set the token in the state

    // const userDataFromToken = jwtDecode(token);
    // setState({ ...state, user: userDataFromToken });
    navigate("/");
  };

  const logout = () => {
    // 🐨 Todo: Exercise #7
    //  ให้เขียน Logic ของ Function `logout` ตรงนี้
    //  Function logout ทำหน้าที่ในการลบ JWT Token ออกจาก Local Storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setState({ ...state, user: null });
    console.log(localStorage);
    navigate("/login");
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
