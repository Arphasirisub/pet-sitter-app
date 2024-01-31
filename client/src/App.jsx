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
  const [token, setToken] = useState({ token: null, role: null }); // Set to null initially

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} token={token} />}
        />
        <Route path="/register" element={<RegisterPage />} />

        {token ? (
          <>
            <Route path="/sitter" element={<SisterHomepage />} />
            <Route path="/list" element={<SearchListPage />} />
            <Route path="/detail" element={<SitterDetailsPage />} />
          </>
        ) : (
          <Route path="/" element={<OwnerHomePage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
