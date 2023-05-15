const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/requestValidation");
const trickControllers = require("../controllers/trickControllers");

router.get("/", trickControllers.getAllTricks);
router.get("/:trickId", trickControllers.getOneTrick);
router.post("/", trickControllers.createTrick);
router.delete("/:trickId", trickControllers.deleteTrick);
router.patch("/:trickId", trickControllers.updateTrick);

module.exports = router;
