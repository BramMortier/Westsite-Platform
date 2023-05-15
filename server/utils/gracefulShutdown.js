const mongoose = require("mongoose");

const gracefulShutdown = (server) => {
    server.close(() => {
        mongoose.connection.close(false, () => {
            process.exit(0);
        });
    });
};

module.exports = gracefulShutdown;
