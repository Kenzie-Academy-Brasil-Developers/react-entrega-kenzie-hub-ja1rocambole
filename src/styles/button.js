import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 14px 22.3336px;
  border-radius: 4px;

  background: ${({ color }) => color};
  border: 1.2182px solid ${({ color }) => color};

  color: var(--color-grey-0);
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background: ${({ hoverColor }) => hoverColor};
    border: 1.2182px solid ${({ hoverColor }) => hoverColor};
  }

  &:disabled {
    background: ${({ disabledColor }) => disabledColor};
    border: 1.2182px solid ${({ disabledColor }) => disabledColor};
  }
`;
