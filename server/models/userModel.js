const mongoose = require("mongoose");
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
        select: false,
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
    adress: {
        type: String,
        required: true,
    },
    trainer: {
        type: Boolean,
        required: true,
    },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
