import React, { useContext } from "react";
import { StyledButton } from "../../styles/button";
import { CardTech } from "../CardTech";
import { StyledTitle } from "../Title/style";
import { StyledContainerTechs } from "./style";

import { ModalCreateTech } from "../ModalCreateTech";
import { TechContext } from "../../contexts/TechContext";

export const ContainerTechs = ({ className, userTechs }) => {
  const { modalVisible, setModalVisible } = useContext(TechContext);

  return (
    <StyledContainerTechs className={className}>
      {modalVisible ? <ModalCreateTech /> : null}

      <div>
        <StyledTitle title="one">Tecnologias</StyledTitle>

        <StyledButton
          color="var(--color-grey-3)"
          hoverColor="var(--color-grey-2)"
          onClick={() => setModalVisible(true)}
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
