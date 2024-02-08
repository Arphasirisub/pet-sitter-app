import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/registerpage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import SitterHomepage from "./pages/SitterHomePage/SitterHomepage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
import OwnerMangementPage from "./pages/OwnerManagementPage/OwnerMangementPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import jwtInterceptor from "./utils/jwtInterceptor.js";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage.Jsx";

function App() {
  jwtInterceptor();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<OwnerHomePage />} />
      <Route path="/sitter/:id" element={<SitterHomepage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail/:id" element={<SitterDetailsPage />} />
      <Route path="/owner/:id" element={<OwnerMangementPage />} />
      <Route path="/booking/:start/:end/:id" element={<BookingPage />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
    </Routes>
  );
}

export default App;
