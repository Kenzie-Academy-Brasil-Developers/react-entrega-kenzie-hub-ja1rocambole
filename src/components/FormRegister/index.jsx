import React from "react";

import { StyledTitle } from "../Title/style";
import { StyledHeadLine } from "../HeadLine/style";
import { StyledInput } from "../Input/style";
import { StyledButton } from "../../styles/button";
import { StyledSelect } from "../Select/style";
import { formSchemaRegister } from "./schemaRegister";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const FormRegister = ({ className }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaRegister),
  });

  const postCreateUser = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 4500);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <div className={className}>
      <StyledTitle title="one">Criar sua conta</StyledTitle>
      <StyledHeadLine tag="p" color="var(--color-grey-1)">
        Rapido e grátis, vamos nessa
      </StyledHeadLine>

      <form onSubmit={handleSubmit(postCreateUser)} noValidate>
        <StyledInput
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          errorMessage={errors.name?.message}
        />

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
        <StyledInput
          id="confirm"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme sua senha"
          register={register("confirm")}
          errorMessage={errors.confirm?.message}
        />

        <StyledInput
          id="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          errorMessage={errors.bio?.message}
        />

        <StyledInput
          id="contact"
          label="Contato"
          type="number"
          placeholder="Opção de contato"
          register={register("contact")}
          errorMessage={errors.contact?.message}
        />

        <StyledSelect
          id="course_module"
          label="Selecionar módulo"
          register={register("course_module")}
          errorMessage={errors.course_module?.message}
        >
          <option value="Primeiro módulo">Primeiro Modúlo</option>
          <option value="Segundo módulo">Segundo Modúlo</option>
        </StyledSelect>

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
