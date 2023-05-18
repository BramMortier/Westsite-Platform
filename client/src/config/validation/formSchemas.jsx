import * as yup from "yup";

export const registerFormValidationSchema = yup.object().shape({
    firstname: yup.string().required("firstname is required"),
    lastname: yup.string().required("lastname is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string().min(6).required("password is required"),
});

export const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
});
