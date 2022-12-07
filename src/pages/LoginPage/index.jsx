import React from "react";
import { Logo } from "../../components/Logo";
import { StyledFormLogin } from "../../components/FormLogin/style";
import { StyledLoginPage } from "./style";

export const LoginPage = ({ setUser }) => {
  return (
    <StyledLoginPage className="container">
      <header>
        <Logo />
      </header>

      <StyledFormLogin setUser={setUser} />
    </StyledLoginPage>
  );
};
