const mongoose = require("mongoose");
const { Schema } = mongoose;

const trainingSessionSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const trainingSessionModel = mongoose.model("TrainingSession", trainingSessionSchema);

module.exports = trainingSessionModel;
