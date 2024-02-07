import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import jwtInterceptor from "../utils/jwtInterceptor";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext); // this is a hook that consume AuthContext
//In React, when you declare something outside of a component (function AuthProvider(){}),
//its scope extends beyond the specific rendering of components.
//The lifespan of entities declared outside components, such as variables, functions,
//or hooks, is not tied to the lifecycle of a specific component or rendering.

//The AuthProvider and its related context, along with the useAuth hook
//(if declared outside AuthProvider), will exist beyond this specific rendering.
//They persist as long as your application is running.

//This ability to declare and use entities at a broader scope is beneficial for
//creating modular and reusable code. It allows you to organize your logic,
//state management, and utility functions in a way that promotes maintainability
//and code separation.

function AuthProvider(props) {
  const navigate = useNavigate();
  // jwtInterceptor();

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

      const token = response.data.token;

      if (data.isRemember) {
        localStorage.setItem("isRemember", "true");
        localStorage.setItem("email", data.email);
      } else {
        localStorage.removeItem("isRemember");
        localStorage.removeItem("email");
      }

      const userDataFromToken = jwtDecode(token);

      setState((prevState) => ({
        ...prevState,
        user: { ...userDataFromToken },
        isAuthenticated: true,
        isLoading: false,
        isError: false,
      }));

      if (userDataFromToken.role === "pet_owner") {
        navigate("/");
      } else {
        navigate(`/sitter/${userDataFromToken.id}`);
      }

      localStorage.setItem("token", token);
      localStorage.setItem("id", userDataFromToken.id);
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
    localStorage.removeItem("id");
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

export { AuthProvider, useAuth };
