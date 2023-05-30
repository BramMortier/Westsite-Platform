const path = require("path");
const fs = require("fs/promises");

const getAllFiles = async (req, res) => {
    const files = await fs.readdir(path.join(__dirname, "../public/uploads"));

    res.status(200).json({ status: "OK", files: files });
};

const getOneFile = async (req, res) => {
    const { filename } = req.params;
    const file = path.join(__dirname, "../public/uploads/", filename);

    res.status(200).sendFile(file);
};

const uploadFile = async (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "File(s) uploaded succesfully",
        files: req.files,
    });
};

const deleteFile = async (req, res) => {
    const { filename } = req.params;

    // TODO delete file

    res.status(200).json({ status: "OK" });
};

module.exports = { getAllFiles, getOneFile, uploadFile, deleteFile };
