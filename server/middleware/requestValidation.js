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

module.exports = validateRequest;
