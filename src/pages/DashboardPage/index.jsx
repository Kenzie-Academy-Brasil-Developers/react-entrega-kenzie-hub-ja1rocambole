import React, { useContext } from "react";
import { StyledHeadLine } from "../../components/HeadLine/style";
import { Logo } from "../../components/Logo";
import { StyledTitle } from "../../components/Title/style";
import { StyledButton } from "../../styles/button";
import { StyledDashBoardPage } from "./style";

import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ContainerTechs } from "../../components/ContainerTechs";

export const DashboardPage = () => {
  const { user, setUser, globalLoading } = useContext(UserContext);

  const logOut = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser();
  };

  if (globalLoading) {
    return;
  }
  if (user) {
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
          <StyledTitle title="one">Olá, {user.name}</StyledTitle>
          <StyledHeadLine tag="p" color="var(--color-grey-1)">
            {user.course_module}
          </StyledHeadLine>
        </div>

        <hr />

        <ContainerTechs className="container" userTechs={user.techs} />
      </StyledDashBoardPage>
    );
  } else {
    return <Navigate to="/" />;
  }
};
