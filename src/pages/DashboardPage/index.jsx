import React from "react";
import { StyledHeadLine } from "../../components/HeadLine/style";
import { Logo } from "../../components/Logo";
import { StyledTitle } from "../../components/Title/style";
import { StyledButton } from "../../styles/button";
import { StyledDashBoardPage } from "./style";

import { useNavigate } from "react-router-dom";

export const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("@TOKEN", "");
    localStorage.setItem("@USERID", "");
    setUser({});
    navigate("/");
  };

  return (
    <StyledDashBoardPage>
      <div className="container">
        <header>
          <Logo />

          <StyledButton
            color="var(--color-grey-3)"
            hoverColor="var(--color-grey-2)"
            onClick={() => logOut()}
          >
            Sair
          </StyledButton>
        </header>
      </div>

      <hr />

      <div className="container contaiener-profile">
        <StyledTitle title="one">
          Olá, {user.name ? user.name : " desconhecido você não está logado"}
        </StyledTitle>
        <StyledHeadLine tag="p" color="var(--color-grey-1)">
          {user.course_module}
        </StyledHeadLine>
      </div>

      <hr />

      <div className="container container-develop">
        <StyledTitle title="one">
          Que pena! Estamos em desenvolvimento {":("}
        </StyledTitle>
        <StyledHeadLine tag="p" color="var(--color-grey-0)">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledHeadLine>
      </div>
    </StyledDashBoardPage>
  );
};
