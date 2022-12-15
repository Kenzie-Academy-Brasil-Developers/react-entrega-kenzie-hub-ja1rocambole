import React, { useContext } from "react";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { StyledModalCreateTech } from "./style";

import { formSchemaModalCreateTech } from "./schemaModalCreateTech";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledSelect } from "../Select/style";
import { StyledButton } from "../../styles/button";
import { TechContext } from "../../contexts/TechContext";

export const ModalCreateTech = () => {
  const { postCreateTech, setModalRegisterVisible } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModalCreateTech),
  });

  return (
    <StyledModalCreateTech>
      <div className="container-modal-create-tech">
        <div className="modal-header">
          <StyledTitle title="three">Cadastrar Tecnologia</StyledTitle>

          <button onClick={() => setModalRegisterVisible(false)}>x</button>
        </div>

        <form onSubmit={handleSubmit(postCreateTech)}>
          <StyledInput
            id="title"
            label="Nome"
            type="text"
            placeholder="Digite sua tecnologia"
            register={register("title")}
            errorMessage={errors.title?.message}
          />
          <StyledSelect
            id="status"
            label="Selecionar status"
            register={register("status")}
            errorMessage={errors.status?.message}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <StyledButton
            color="var(--color-primary)"
            hoverColor="var(--color-primary-focus)"
            disabledColor="var(--color-primary-negative)"
          >
            Cadastrar Tecnologia
          </StyledButton>{" "}
        </form>
      </div>
    </StyledModalCreateTech>
  );
};
