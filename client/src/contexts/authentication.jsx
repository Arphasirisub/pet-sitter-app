import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import jwtInterceptor from "../utils/jwtInterceptor";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  jwtInterceptor();

  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    isSignInError: false,
    isSignUpError: null,
    user: null,
    isAuthenticated: Boolean(localStorage.getItem("token")),
  });

  const register = async (data) => {
    try {
      setState({ ...state, isLoading: true });

      await axios.post("http://localhost:4000/authentication/register", data);

      setState({ ...state, isLoading: false, isSignUpError: false });
    } catch (error) {
      console.error("Registration failed:", error);
      setState({ ...state, isLoading: false, isSignUpError: true });
    }
  };

  const login = async (data) => {
    try {
      setState({ ...state, isLoading: true });

      const response = await axios.post(
        "http://localhost:4000/authentication/login",
        data
      );
      console.log(data);

      const token = response.data.token;

      localStorage.setItem("token", token);

      if (data.isRemember) {
        localStorage.setItem("isRemember", "true");
        localStorage.setItem("email", data.email);
      } else {
        localStorage.removeItem("isRemember");
        localStorage.removeItem("email");
      }

      const userDataFromToken = jwtDecode(token);
      setState({
        ...state,
        user: userDataFromToken,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
      });
      console.log(state);
      navigate("/");
    } catch (error) {
      setState({
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isSignInError: true,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
    console.log(localStorage);
    navigate("/login");
  };

  const checkToken = () => {
    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setState({
          ...state,
          isAuthenticated: false,
          isLoading: false,
          isError: false,
        });
        return;
      }

      const userDataFromToken = jwtDecode(storedToken);

      setState({
        ...state,
        user: userDataFromToken,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      console.error("Error decoding token:", error);

      setState({
        ...state,
        isAuthenticated: false,
        isLoading: false,
        isError: true,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, setState, checkToken, login, logout, register }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
