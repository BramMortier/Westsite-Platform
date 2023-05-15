const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    birthYear: {
        type: Number,
        required: true,
    },
    homeCable: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    trainer: {
        type: Boolean,
        required: true,
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.validatePassword = async function () {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: `${process.env.JWT_EXPIRES_IN}h` });
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
