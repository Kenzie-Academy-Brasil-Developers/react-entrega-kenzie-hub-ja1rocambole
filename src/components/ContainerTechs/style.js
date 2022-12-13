import styled from "styled-components";

export const StyledContainerTechs = styled.div`
  & > div {
    margin-bottom: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > button {
    padding: 0;
    height: 32px;
    width: 32px;
    font-size: 22px;
  }

  ul {
    width: 100%;
    height: 400px;

    display: flex;
    flex-direction: column;
    gap: 13px;

    padding: 23px;
    background: var(--color-grey-3);
    border-radius: 4px;
  }
`;
