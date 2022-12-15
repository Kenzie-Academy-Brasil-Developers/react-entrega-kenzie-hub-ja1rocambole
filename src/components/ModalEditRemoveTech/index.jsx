import React, { useContext } from "react";
import { StyledInput } from "../Input/style";
import { StyledTitle } from "../Title/style";
import { StyledModalEditRemoveTech } from "./style";

import { formSchemaModalEditRemoveTech } from "./SchemaModalEditRemoveTech";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledSelect } from "../Select/style";
import { StyledButton } from "../../styles/button";
import { TechContext } from "../../contexts/TechContext";

export const ModalEditRemoveTech = ({ setModalEditRemoveVisible, tech }) => {
  const { putEditTech, deleteTech } = useContext(TechContext);

  const editTech = (data) => {
    putEditTech(data, tech.id, setModalEditRemoveVisible);
  };

  const removeTech = () => {
    deleteTech(tech.id, setModalEditRemoveVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModalEditRemoveTech),
  });

  return (
    <StyledModalEditRemoveTech>
      <div className="container-modal-create-tech">
        <div className="modal-header">
          <StyledTitle title="three">editar tec</StyledTitle>

          <button onClick={() => setModalEditRemoveVisible(false)}>x</button>
        </div>

        <form onSubmit={handleSubmit(editTech)}>
          <StyledInput
            id="title"
            label="Nome"
            type="text"
            value={tech.title}
            placeholder="Digite sua tecnologia"
            // register={register("title")}
            errorMessage={errors.title?.message}
            disabled={true}
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

          <div className="modal-buttons">
            <StyledButton
              color="var(--color-primary)"
              hoverColor="var(--color-primary-focus)"
              disabledColor="var(--color-primary-negative)"
              type="submit"
            >
              Salvar alteraçõess
            </StyledButton>{" "}
            <StyledButton
              color="var(--color-grey-1)"
              hoverColor="var(--color-grey-2)"
              disabledColor="var(--color-primary-negative)"
              type="button"
              onClick={() => removeTech()}
            >
              Excluir
            </StyledButton>{" "}
          </div>
        </form>
      </div>
    </StyledModalEditRemoveTech>
  );
};
