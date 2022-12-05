import React from "react";

export const Input = ({
  id,
  label,
  type,
  placeholder,
  className,
  register,
}) => {
  return (
    <fieldset className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </fieldset>
  );
};
