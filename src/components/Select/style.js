import styled from "styled-components";
import { Select } from ".";

export const StyledSelect = styled(Select)`
  margin-bottom: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;

  label {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-0);
  }

  select {
    box-sizing: border-box;
    padding: 15px 16.2426px;
    gap: 10.15px;
    width: 100%;
    background: var(--color-grey-2);
    color: var(--color-grey-1);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;
  }
  select:focus {
    outline: var(--color-grey-0);
    border: 1.2182px solid var(--color-grey-0);
  }
  select:focus::placeholder {
    color: var(--color-grey-0);
  }

  select[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
