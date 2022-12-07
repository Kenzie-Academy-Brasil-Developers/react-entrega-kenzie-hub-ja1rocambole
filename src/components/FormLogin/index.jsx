import React from "react";
import { StyledButton } from "../../styles/button";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ className }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
  };

  const goRegister = () => {
    //"/login" deve ser uma rota criada previamente
    navigate("/register");
  };

  return (
    <div className={className}>
      <StyledTitle title="one">Criar sua conta</StyledTitle>

      <form onSubmit={handleSubmit(submit)}>
        <StyledInput
          id="email"
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
        />

        <StyledInput
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
        />

        <StyledButton
          color="var(--color-primary)"
          hoverColor="var(--color-primary-focus)"
          disabledColor="var(--color-primary-negative)"
        >
          Cadastrar
        </StyledButton>
      </form>
      <StyledHeadLine tag="p" color="var(--color-grey-1)">
        Ainda não possui uma conta?
      </StyledHeadLine>

      <StyledButton
        color="var(--color-grey-1)"
        hoverColor="var(--color-grey-2)"
        onClick={goRegister}
      >
        Cadrastre-se
      </StyledButton>
    </div>
  );
};
