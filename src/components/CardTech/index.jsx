import React from "react";
import { StyledTitle } from "../Title/style";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledCardTech } from "./style";

export const CardTech = ({ tech }) => {
  return (
    <StyledCardTech>
      <StyledTitle title="three">{tech.title}</StyledTitle>

      <StyledHeadLine tag="p" color="var(--color-grey-1)">
        {tech.status}
      </StyledHeadLine>
    </StyledCardTech>
  );
};
