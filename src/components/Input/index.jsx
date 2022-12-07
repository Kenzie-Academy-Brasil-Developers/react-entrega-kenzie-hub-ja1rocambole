import React from "react";
import { StyledHeadLine } from "../HeadLine/style";

export const Input = ({
  id,
  label,
  type,
  placeholder,
  className,
  register,
  errorMessage,
}) => {
  return (
    <fieldset className={className}>
      <label htmlFor={id}>{label}</label>
      {errorMessage ? (
        <StyledHeadLine tag="span" color="var(--color-red-negative)">
          {errorMessage}
        </StyledHeadLine>
      ) : (
        <></>
      )}

      <input id={id} type={type} placeholder={placeholder} {...register} />
    </fieldset>
  );
};
