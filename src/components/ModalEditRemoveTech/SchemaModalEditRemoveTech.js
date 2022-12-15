import * as yup from "yup";

export const formSchemaModalEditRemoveTech = yup.object().shape({
  status: yup.string().required("Campo obrigatório"),
});
