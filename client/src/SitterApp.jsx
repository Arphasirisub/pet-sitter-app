import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage.Jsx";
import SitterHomepage from "./pages/SitterHomePage/SitterHomepage";

function SitterApp() {
  return (
    <Routes>
      <Route path="/sitter/:id" element={<SitterHomepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/" element={<OwnerHomePage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail/:id" element={<SitterDetailsPage />} />
    </Routes>
  );
}

export default SitterApp;
