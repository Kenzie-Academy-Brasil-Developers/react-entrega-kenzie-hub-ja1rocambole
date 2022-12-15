import React, { useContext, useState } from "react";
import { StyledTitle } from "../Title/style";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledCardTech } from "./style";
import { TechContext } from "../../contexts/TechContext";
import { ModalEditRemoveTech } from "../ModalEditRemoveTech";

export const CardTech = ({ tech }) => {
  const [modalEditRemoveVisible, setModalEditRemoveVisible] = useState(false);
  useContext(TechContext);
  return (
    <>
      {modalEditRemoveVisible ? (
        <ModalEditRemoveTech
          setModalEditRemoveVisible={setModalEditRemoveVisible}
          tech={tech}
        />
      ) : null}
      <StyledCardTech onClick={() => setModalEditRemoveVisible(true)}>
        <StyledTitle title="three">{tech.title}</StyledTitle>

        <StyledHeadLine tag="p" color="var(--color-grey-1)">
          {tech.status}
        </StyledHeadLine>
      </StyledCardTech>
    </>
  );
};
