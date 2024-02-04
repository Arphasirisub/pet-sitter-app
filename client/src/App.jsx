import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import SitterHomepage from "./pages/SitterHomePage/SitterHomepage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<OwnerHomePage />} />
        <Route path="/sitter/:id" element={<SitterHomepage />} />
        <Route path="/list" element={<SearchListPage />} />
        <Route path="/detail" element={<SitterDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
