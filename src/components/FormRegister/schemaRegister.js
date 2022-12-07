import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),

  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),

  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "Sua senha deve ter ao menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Sua senha deve ter ao menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Sua senha deve ter ao menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "Sua senha deve ter ao menos um caractere especial"
    ),
  confirm: yup
    .string()
    .when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
    })
    .required(),

  bio: yup.string().required("Campo obrigatório"),

  contact: yup.string().required("Campo obrigatório"),
});
