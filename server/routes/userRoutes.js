const express = require("express");
const router = express.Router();
const { verifyJsonwebtoken } = require("../middleware/verifyJsonwebtoken");
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.getAllUsers);
router.get("/me", verifyJsonwebtoken, userControllers.getAuthenticatedUser);
router.get("/:userId", userControllers.getOneUser);
router.delete("/:userId", userControllers.deleteUser);
router.patch("/:userId", userControllers.updateUser);

module.exports = router;
