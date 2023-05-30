const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const gracefulShutdown = require("./utils/gracefulShutdown");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/files", require("./routes/fileRoutes"));
app.use("/api/trainingSessions", require("./routes/trickRoutes"));
app.use("/api/tricks", require("./routes/trainingSessionRoutes"));
app.use("/api/newsposts", require("./routes/newspostRoutes"));

let server;

mongoose.connection.once("open", () => {
    console.log(`MongoDB connection established`);
    server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});

process.on("SIGTERM", () => gracefulShutdown(server));
