import styled from "styled-components";
import { FormLogin } from "./";

export const StyledFormLogin = styled(FormLogin)`
  display: flex;
  flex-direction: column;

  width: 370px;
  margin: 0 auto;
  margin-bottom: 70px;
  padding: 42px 20px 28px 20px;
  background: var(--color-grey-3);

  h1 {
    margin-bottom: 22px;
    align-self: center;
  }

  & > p {
    margin-top: 30px;
    margin-bottom: 22px;

    align-self: center;
  }

  button {
    width: 100%;
  }
`;
