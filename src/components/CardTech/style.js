import styled from "styled-components";

export const StyledCardTech = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 48px;
  width: 100%;

  padding: 12px;
  border-radius: 4px;
  background: var(--color-grey-4);

  &:hover {
    background: var(--color-grey-2);
  }
  &:hover p {
    color: var(--color-grey-0);
  }
`;
