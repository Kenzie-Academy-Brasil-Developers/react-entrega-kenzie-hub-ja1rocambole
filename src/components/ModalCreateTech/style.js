import styled from "styled-components";

export const StyledModalCreateTech = styled.div`
  height: 100vh;
  width: 100vw;

  background: rgba(18, 18, 20, 0.5);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: center !important;
  align-items: center;

  .container-modal-create-tech {
    width: 300px;
    background: var(--color-grey-3);
    border-radius: 4px;
  }
  .modal-header {
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    border-radius: 4px 4px 0 0;
    background: var(--color-grey-2);
  }
  .modal-header > button {
    padding: 3px;
    border: none;
    background: none;

    color: var(--color-grey-1);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 22px;
  }
`;
