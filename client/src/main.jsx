import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/authentication.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./customTheme.js";
import { SittersProvider } from "./contexts/getSitters.jsx";
import { MyPetsToolsProvider } from "./contexts/myPetsTools.jsx";

import { BookingToolsProvider } from "./contexts/BookingTools.jsx";
import { FacebookProvider } from "./contexts/facebook.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FacebookProvider>
          <MyPetsToolsProvider>
            <SittersProvider>
              <BookingToolsProvider>
                <ThemeProvider theme={theme}>
                  <App />
                </ThemeProvider>
              </BookingToolsProvider>
            </SittersProvider>
          </MyPetsToolsProvider>
        </FacebookProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
