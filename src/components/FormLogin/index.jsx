import React from "react";

import { StyledButton } from "../../styles/button";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { formSchemaLogin } from "./shemaLogin";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const FormLogin = ({ className, setUser }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaLogin) });
  const navigate = useNavigate();

  const postLogin = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div className={className}>
      <StyledTitle title="one">Criar sua conta</StyledTitle>

      <form onSubmit={handleSubmit(postLogin)}>
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
