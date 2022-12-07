import styled, { css } from "styled-components";
import { HeadLine } from ".";

export const StyledHeadLine = styled(HeadLine)`
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  ${({ headline }) => {
    switch (headline) {
      case "bold":
        return css`
          font-weight: 600;
          font-size: 0.75rem;
        `;
      case "italic":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
          font-style: italic;
        `;

      default:
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
        break;
    }
  }}
`;
