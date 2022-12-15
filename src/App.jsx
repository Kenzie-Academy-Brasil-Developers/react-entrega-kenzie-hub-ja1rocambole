import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="dashboard"
          element={
            <TechProvider>
              <DashboardPage />{" "}
            </TechProvider>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
