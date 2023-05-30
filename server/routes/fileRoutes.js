const express = require("express");
const router = express.Router();
const uploadFile = require("../middleware/uploadFile");
const fileControllers = require("../controllers/fileControllers");

router.get("/", fileControllers.getAllFiles);
router.get("/:filename", fileControllers.getOneFile);
router.post("/uploadFile", uploadFile.array("files"), fileControllers.uploadFile);
router.delete("/:filename", fileControllers.deleteFile);

module.exports = router;
