const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/requestValidation");
const trainingSessionControllers = require("../controllers/trainingSessionControllers");

router.get("/", trainingSessionControllers.getAllTrainingSessions);
router.get("/:trainingSessionId", trainingSessionControllers.getOneTrainingSession);
router.post("/", trainingSessionControllers.createTrainingSession);
router.delete("/:trainingSessionId", trainingSessionControllers.deleteTrainingSession);
router.patch("/:trainingSessionId", trainingSessionControllers.updateTrainingSession);

module.exports = router;
