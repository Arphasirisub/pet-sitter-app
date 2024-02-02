import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/registerpage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import SisterHomepage from "./pages/SitterHomePage/SisterHomepage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
import { useEffect, useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/sitter" element={<SisterHomepage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail/:id" element={<SitterDetailsPage />} />
      <Route path="/" element={<OwnerHomePage />} />
    </Routes>
  );
}

export default App;
