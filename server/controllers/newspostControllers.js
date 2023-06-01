const newsPostServices = require("../services/newspostServices");
const Newspost = require("../models/newspostModel");

const getAllNewsposts = async (req, res) => {
    const newsposts = await Newspost.find();
    res.status(200).json({ status: "OK", newsposts: newsposts });
};

const getOneNewspost = async (req, res) => {};

const createNewspost = async (req, res) => {
    const { title, description, label } = req.body;
    try {
        const newspost = new Newspost({
            title,
            description,
            label,
        });

        newspost.save();

        res.status(201).json({ status: "OK", message: "Newspost created succesfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "ERROR", message: "Internal server error" });
    }
};

const deleteNewspost = async (req, res) => {};

const updateNewspost = async (req, res) => {};

module.exports = {
    getAllNewsposts,
    getOneNewspost,
    createNewspost,
    deleteNewspost,
    updateNewspost,
};
