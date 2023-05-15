const { body, validationResult } = require("express-validator");

const validateRequest = (schema) => {
    return async (req, res, next) => {
        await Promise.all(schema.map((rule) => rule.run(req)));

        const result = validationResult(req);
        if (result.isEmpty()) return next();

        const errors = result.array();
        return res.status(400).send({ status: "FAILED", data: errors });
    };
};

const userRegisterRules = [
    body("firstname").notEmpty().withMessage("First name is required"),
    body("lastname").notEmpty().withMessage("Last name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
];

const userLoginRules = [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { validateRequest, userRegisterRules, userLoginRules };
