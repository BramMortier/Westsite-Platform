const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");

const getAllFiles = async (req, res) => {
    const uploadsDirectory = path.join(__dirname, "../public/uploads");

    try {
        const files = await fs.readdir(uploadsDirectory);

        const filesWithInfo = await Promise.all(
            files.map(async (filename) => {
                const fileStats = await fs.stat(path.join(uploadsDirectory, filename));
                return {
                    filename: filename,
                    size: fileStats.size,
                    createdAt: fileStats.birthtime,
                };
            })
        );

        res.status(200).json({ status: "OK", files: filesWithInfo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "ERROR", message: "Internal server error" });
    }
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
        uploadedFiles: req.files,
    });
};

const deleteFile = async (req, res) => {
    const { filename } = req.params;
    const file = path.join(__dirname, "../public/uploads/", filename);

    try {
        if (fsSync.existsSync(file)) {
            fsSync.unlinkSync(file);
        } else {
            console.error("File does not exist");
        }

        res.status(200).json({ status: "OK", deletedFile: file });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "ERROR", message: "Internal server error" });
    }
};

module.exports = { getAllFiles, getOneFile, uploadFile, deleteFile };
