import Joi from "joi-browser";

export const registerFormValidationSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    passowrd: Joi.string().min(6).required(),
});
