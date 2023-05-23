const User = require("../models/userModel");

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

module.exports = { getAllUsers };
