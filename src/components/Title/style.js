import styled, { css } from "styled-components";
import { Title } from ".";

export const StyledTitle = styled(Title)`
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  ${({ title }) => {
    switch (title) {
      case "one":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;
      case "two":
        return css`
          font-weight: 700;
          font-size: 1rem;
        `;
      case "three":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
        `;

      default:
        break;
    }
  }}
`;
