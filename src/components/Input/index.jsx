import React from "react";
import { StyledHeadLine } from "../HeadLine/style";

export const Input = ({
  id,
  label,
  type,
  value,
  placeholder,
  className,
  register,
  errorMessage,
  disabled,
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

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        value={value ? value : null}
        disabled={disabled ? disabled : null}
      />
    </fieldset>
  );
};
