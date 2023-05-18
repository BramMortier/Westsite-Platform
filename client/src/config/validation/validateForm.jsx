const validateForm = async (validationSchema, formData) => {
    try {
        await validationSchema.validate(formData, { abortEarly: false });
        return true;
    } catch (errors) {
        const validationErrors = {};

        errors.inner.forEach((error) => {
            const key = error.path;
            const message = error.message;

            if (validationErrors[key]) {
                validationErrors[key].push(message);
            } else {
                validationErrors[key] = [message];
            }
        });

        return validationErrors;
    }
};

export default validateForm;
