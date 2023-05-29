import * as yup from "yup";

export const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
});

export const userFormValidationSchema = yup.object().shape({
    firstname: yup.string().required("Vul een voornaam in"),
    lastname: yup.string().required("Vul een achternaam in"),
    email: yup.string().email("Onjuist e-mail formaat").required("Vul een e-email in"),
    password: yup.string().min(6, "Minstens 6 characters").required("Vul een wachtwoord in"),
    phoneNumber: yup
        .string()
        .nullable()
        .transform((value) => (value === "" ? null : value))
        .matches(/^\+32 \d{3} \d{2} \d{2} \d{2}$/, "Onjuist formaat: +32 --- -- -- --"),
    birthYear: yup
        .string()
        .nullable()
        .transform((value) => (value === "" ? null : value)),
    homeCable: yup.string().required("Selecteer een home cablepark"),
    address: yup
        .string()
        .nullable()
        .transform((value) => (value === "" ? null : value)),
    trainer: yup.boolean().typeError("Onjuist formaat").required("Kies voor trainer of lid"),
});
