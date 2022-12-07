import React from "react";
import { StyledFormRegister } from "../../components/FormRegister/style";
import { StyledRegisterPage } from "./style";
import { Logo } from "../../components/Logo";
import { StyledButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/");
  };
  return (
    <>
      <StyledRegisterPage className="container">
        <header>
          <Logo />

          <StyledButton
            color="var(--color-grey-3)"
            hoverColor="var(--color-grey-2)"
            onClick={goLogin}
          >
            Voltar
          </StyledButton>
        </header>

        <StyledFormRegister />
      </StyledRegisterPage>
    </>
  );
};
