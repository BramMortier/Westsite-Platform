const userServices = require("../services/userServices");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { firstname, lastname, email, password, phoneNumber, birthYear, homeCable, address, trainer } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(409).json({ status: "ERROR", message: "An account with this email already exists" });

        user = new User({
            firstname,
            lastname,
            email,
            password,
            phoneNumber,
            birthYear,
            homeCable,
            address,
            trainer,
        });

        await user.save();

        res.status(201).json({ status: "OK", message: "Account created succesfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "ERROR", message: "Failed to create Account" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ status: "ERROR", message: "Invalid email address" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ status: "ERROR", message: "Email and passowrd don't match" });

        const accesToken = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: `${process.env.JWT_EXPIRES_IN}h` });

        res.status(200).json({
            status: "OK",
            message: "Login succes",
            token: accesToken,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "ERROR", message: "Login Failed" });
    }
};

module.exports = { register, login };
