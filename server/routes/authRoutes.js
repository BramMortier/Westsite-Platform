const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/requestValidation");

router.post("/register");
router.post("/login");
router.post("/logout");
router.post("/refreshToken");

module.exports = router;
