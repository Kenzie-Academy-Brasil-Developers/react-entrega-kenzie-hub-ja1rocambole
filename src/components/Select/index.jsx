import React from "react";
import { StyledHeadLine } from "../HeadLine/style";

export const Select = ({
  children,
  id,
  label,
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
      <select id={id} {...register}>
        {children}
      </select>{" "}
    </fieldset>
  );
};
