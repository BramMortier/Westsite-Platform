const mongoose = require("monogose");
const { Schema } = mongoose;

const trickSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        required: true,
    },

    matchingTricks: [{ type: Schema.types.ObjectId, ref: "Trick" }],
});

const trickModel = mongoose.model("Trick", trickSchema);

module.exports = trickModel;
