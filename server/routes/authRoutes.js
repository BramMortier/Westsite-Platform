const express = require("express");
const router = express.Router();
const { validateRequest, userLoginRules, userRegisterRules } = require("../middleware/requestValidation");
const authControllers = require("../controllers/authControllers");

router.post("/register", validateRequest(userRegisterRules), authControllers.register);
router.post("/login", validateRequest(userLoginRules), authControllers.login);
router.post("/logout");
router.post("/refreshToken");

module.exports = router;
