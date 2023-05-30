const multer = require("multer");
const path = require("path");

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const extension = path.extname(file.originalname);
        const originalName = file.originalname.split(".").slice(0, -1).join(".");
        const filename = `${originalName}-${uniqueSuffix}${extension}`;

        cb(null, filename);
    },
});

const uploadFile = multer({ storage: fileStorage });

module.exports = uploadFile;
