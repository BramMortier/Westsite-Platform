const mongoose = require("mongoose");
const { Schema } = mongoose;

const newspostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
            default: "Aankondiging",
        },
    },
    {
        timestamps: true,
    }
);

const newspostModel = mongoose.model("Newspost", newspostSchema);

module.exports = newspostModel;
