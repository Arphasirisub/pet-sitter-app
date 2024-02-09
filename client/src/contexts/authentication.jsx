import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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

  const [state, setState] = useState({
    user: null,
    signIn: { isLoading: false, isSignInError: false },
    signUp: { isLoading: false, isSignUpError: null },
    forgetPassword: {
      isForgetPassword: false,
      isLoading: false,
      isError: false,
      isComplete: false,
    },
    isAuthenticated: Boolean(localStorage.getItem("token")),
  });

  const register = async (data) => {
    try {
      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: true }, // Update isLoading inside signUp
      }));

      await axios.post("http://localhost:4000/authentication/register", data);

      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: false, isSignUpError: false }, // Update isLoading and isSignUpError inside signUp
      }));
    } catch (error) {
      console.error("Registration failed:", error);
      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: false, isSignUpError: true }, // Update isLoading and isSignUpError inside signUp
      }));
    }
  };

  const login = async (data) => {
    try {
      setState((prevState) => ({
        ...prevState,
        signIn: { ...prevState.signIn, isLoading: true }, // Update isLoading inside signIn
      }));

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
        isSignInError: false, // Reset isSignInError on successful login
        signIn: { ...prevState.signIn, isLoading: false }, // Update isLoading inside signIn
      }));

      if (userDataFromToken.role === "pet_owner") {
        navigate("/");
      } else {
        navigate(`/sitter/${userDataFromToken.id}`);
      }

      localStorage.setItem("token", token);

      console.log(token);
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated: false,
        signIn: { ...prevState.signIn, isLoading: false, isSignInError: true }, // Update isLoading inside signIn
      }));
      console.log(state);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setState({ ...state, user: null });
    console.log(localStorage);
    navigate("/login");
  };

  const forgetPassword = async (email) => {
    try {
      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: true,
          isError: false,
          isComplete: false,
        },
      }));

      // Introduce a delay of 2 seconds before making the API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await axios.put("http://localhost:4000/authentication/forgotPassword", {
        email,
      });

      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: false,
          isComplete: true,
        },
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: false,
          isError: true,
        },
      }));
    }
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
      value={{
        state,
        setState,
        checkToken,
        login,
        logout,
        register,
        forgetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
