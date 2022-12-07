import React from "react";
import { Logo } from "../../components/Logo";
import { StyledFormLogin } from "../../components/FormLogin/style";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage className="container">
      <header>
        <Logo />
      </header>

      <StyledFormLogin />
    </StyledLoginPage>
  );
};
