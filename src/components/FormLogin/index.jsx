import React, { useContext } from "react";

import { StyledButton } from "../../styles/button";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { formSchemaLogin } from "./shemaLogin";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";

export const FormLogin = ({ className }) => {
  const { loading, postLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaLogin) });
  const navigate = useNavigate();

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div className={className}>
      <StyledTitle title="one">Login</StyledTitle>

      <form onSubmit={handleSubmit(postLogin)} noValidate>
        <StyledInput
          id="email"
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />

        <StyledInput
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          errorMessage={errors.password?.message}
        />

        <StyledButton
          color="var(--color-primary)"
          hoverColor="var(--color-primary-focus)"
          disabledColor="var(--color-primary-negative)"
          disabled={loading}
        >
          {loading ? "Carregando..." : "Cadastrar"}
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
