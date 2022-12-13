import React from "react";
import { StyledButton } from "../../styles/button";
import { CardTech } from "../CardTech";
import { StyledTitle } from "../Title/style";
import { StyledContainerTechs } from "./style";

export const ContainerTechs = ({ className, userTechs }) => {
  const objTestCard = {
    id: "03668ad4-c5a9-486d-ac2f-43ae62a11191",
    title: "React",
    status: "Iniciante",
    created_at: "2022-12-12T18:53:58.324Z",
    updated_at: "2022-12-12T18:53:58.324Z",
  };
  return (
    <StyledContainerTechs className={className}>
      <div>
        <StyledTitle title="one">Tecnologias</StyledTitle>

        <StyledButton
          color="var(--color-grey-3)"
          hoverColor="var(--color-grey-2)"
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
