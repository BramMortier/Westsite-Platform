const userServices = require("../services/userServices");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(409).json({ message: "An account with this email already exists" });

        user = new User({
            firstname,
            lastname,
            email,
            password,
            phoneNumber: "0484796229",
            birthYear: 2003,
            homeCable: "Outsider Cablepark",
            address: "Gentstraat 92 9700 Oudenaarde",
            trainer: true,
        });

        await user.save();

        res.status(201).json({ message: "Registration succes" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email address" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ message: "Email and passowrd don't match" });

        const accesToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({
            token: `Bearer ${accesToken}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Login Failed" });
    }
};

module.exports = { register, login };
