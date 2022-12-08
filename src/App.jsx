import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route
        path="dashboard"
        element={<DashboardPage user={user} setUser={setUser} />}
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
