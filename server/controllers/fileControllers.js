const uploadFile = async (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "File(s) uploaded succesfully",
        files: req.files,
    });
};

module.exports = { uploadFile };
