import Joi from "joi-browser";

export const validateForm = (validationSchema, formData) => {
    const validationResult = validationSchema.validate(formData, { abortEarly: false });

    const validationErrors = {};

    validationResult.error.details.forEach((error) => {
        const key = error.context.key;
        const message = error.message;

        if (validationErrors[key]) {
            validationErrors[key].push(message);
        } else {
            validationErrors[key] = [message];
        }
    });

    return validationErrors;
};

export const registerFormValidationSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
