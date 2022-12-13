import styled from "styled-components";

export const StyledDashBoardPage = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    margin: 0 auto;
  }
  header > button {
    height: 32px;
    padding: 0 22px;
  }

  hr {
    border-color: var(--color-grey-3);
  }

  .contaiener-profile {
    height: 118px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 600px) {
  }
`;
