const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/requestValidation");
const newspostControllers = require("../controllers/newspostControllers");

router.get("/", newspostControllers.getAllNewsposts);
router.get("/:newspostId", newspostControllers.getOneNewspost);
router.post("/", newspostControllers.createNewspost);
router.delete("/:newspostId", newspostControllers.deleteNewspost);
router.patch("/:newspostId", newspostControllers.updateNewspost);

module.exports = router;
