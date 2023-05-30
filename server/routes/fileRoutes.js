const express = require("express");
const router = express.Router();
const uploadFile = require("../middleware/uploadFile");
const fileControllers = require("../controllers/fileControllers");

router.post("/uploadFile", uploadFile.array("files"), fileControllers.uploadFile);

module.exports = router;
