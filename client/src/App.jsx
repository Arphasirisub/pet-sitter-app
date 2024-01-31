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
  const storedToken = localStorage.getItem("token");
  const storedRole = localStorage.getItem("role");
  const [token, setToken] = useState({ token: storedToken, role: storedRole });

  // Effect to update the state when local storage changes
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    setToken({ token: storedToken, role: storedRole });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage setToken={setToken} token={token} />}
      />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/sitter" element={<SisterHomepage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail" element={<SitterDetailsPage />} />

      <Route path="/" element={<OwnerHomePage />} />
    </Routes>
  );
}

export default App;
