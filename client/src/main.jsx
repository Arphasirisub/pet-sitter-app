import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/authentication.jsx";
import { SittersProvider } from "./contexts/getSitters.jsx";
import { MyPetsToolsProvider } from "./contexts/myPetsTools.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MyPetsToolsProvider>
          <SittersProvider>
            <App />
          </SittersProvider>
        </MyPetsToolsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

//The <React.StrictMode> component is used to wrap the application,
//ensuring that the additional checks and warnings provided by React
//during development are enabled for the entire application.
//It's a good practice to include it in your development setup to catch
//and address potential issues early in the development process.
