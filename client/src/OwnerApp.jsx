import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
import OwnerMangementPage from "./pages/OwnerManagementPage/OwnerMangementPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage.Jsx";
import BookingResultPage from "./pages/BookingPage/BookingResult/BookingResultPage.jsx";
import { useAuth } from "./contexts/authentication.jsx";

function OwnerApp() {
  const { state } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<OwnerHomePage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<OwnerHomePage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail/:id" element={<SitterDetailsPage />} />
      <Route path="/owner/:id/:activeTaps/" element={<OwnerMangementPage />} />
      <Route
        path="/owner/:id/:activeTaps/:subTaps"
        element={<OwnerMangementPage />}
      />
      <Route
        path="/owner/:id/:activeTaps/:subTaps/:petId"
        element={<OwnerMangementPage />}
      />
      <Route path="/booking/:start/:end/:id" element={<BookingPage />} />
      <Route path="/booking/result" element={<BookingResultPage />} />
    </Routes>
  );
}

export default OwnerApp;
