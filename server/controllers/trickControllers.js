const trickServices = require("../services/trickServices");
const Trick = require("../models/trickModel");

const getAllTricks = async (req, res) => {
    res.status(200).json({ status: "OK", message: "getting all tricks..." });
};

const getOneTrick = async (req, res) => {};

const createTrick = async (req, res) => {
    const { name, description, thumbnail, difficulty, type, variant, matchingTricks } = req.body;

    try {
        let trick = await Trick.findOne({ name });
        if (trick) res.status(409).json({ status: "ERROR", message: "A trick with this name already exists" });

        trick = new Trick({
            name,
            description,
            thumbnail,
            difficulty,
            type,
            variant,
            matchingTricks,
        });

        trick.save();

        res.status(201).json({ status: "OK", message: "Trick created succesfully" });
    } catch (error) {}
};

const deleteTrick = async (req, res) => {};

const updateTrick = async (req, res) => {};

module.exports = {
    getAllTricks,
    getOneTrick,
    createTrick,
    deleteTrick,
    updateTrick,
};
