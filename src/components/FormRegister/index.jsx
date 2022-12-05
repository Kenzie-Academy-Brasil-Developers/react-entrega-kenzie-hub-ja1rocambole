import React from "react";
import { StyledButton } from "../../styles/button";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { useForm } from "react-hook-form";

export const FormRegister = ({ className }) => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className={className}>
      <StyledTitle title="one">Criar sua conta</StyledTitle>
      <StyledHeadLine tag="p" color="var(--color-grey-1)">
        Rapido e grátis, vamos nessa
      </StyledHeadLine>

      <form onSubmit={handleSubmit(submit)}>
        <StyledInput
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
        />

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

        <StyledInput
          id="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
        />

        <StyledInput
          id="contact"
          label="Contato"
          type="number"
          placeholder="Opção de contato"
          register={register("contact")}
        />

        <StyledButton
          color="var(--color-primary)"
          hoverColor="var(--color-primary-focus)"
          disabledColor="var(--color-primary-negative)"
        >
          Cadastrar
        </StyledButton>
      </form>
    </div>
  );
};
