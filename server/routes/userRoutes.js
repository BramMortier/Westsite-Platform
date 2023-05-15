const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/requestValidation");
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getOneUser);
router.delete("/:userId", userControllers.deleteUser);
router.patch("/:userId", userControllers.updateUser);

module.exports = router;
