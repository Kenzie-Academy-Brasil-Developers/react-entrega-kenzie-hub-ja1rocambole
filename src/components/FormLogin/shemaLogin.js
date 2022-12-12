import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email(),
  password: yup.string().required("Campo obrigatório"),
});
