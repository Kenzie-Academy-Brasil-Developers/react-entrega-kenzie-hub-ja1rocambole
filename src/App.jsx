import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
