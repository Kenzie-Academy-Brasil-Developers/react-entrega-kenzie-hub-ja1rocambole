import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
