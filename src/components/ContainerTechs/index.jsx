import React, { useContext } from "react";
import { StyledButton } from "../../styles/button";
import { CardTech } from "../CardTech";
import { StyledTitle } from "../Title/style";
import { StyledContainerTechs } from "./style";

import { ModalCreateTech } from "../ModalCreateTech";
import { TechContext } from "../../contexts/TechContext";

export const ContainerTechs = ({ className, userTechs }) => {
  const { modalRegisterVisible, setModalRegisterVisible } =
    useContext(TechContext);

  return (
    <StyledContainerTechs className={className}>
      {modalRegisterVisible ? <ModalCreateTech /> : null}

      <div>
        <StyledTitle title="one">Tecnologias</StyledTitle>

        <StyledButton
          color="var(--color-grey-3)"
          hoverColor="var(--color-grey-2)"
          onClick={() => setModalRegisterVisible(true)}
        >
          +
        </StyledButton>
      </div>

      <ul>
        {userTechs.map((tech) => (
          <CardTech key={tech.id} tech={tech} />
        ))}
      </ul>
    </StyledContainerTechs>
  );
};
