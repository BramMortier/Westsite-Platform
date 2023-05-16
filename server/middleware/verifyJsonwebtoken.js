const jwt = require("jsonwebtoken");

const verifyJsonwebtoken = (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];

    if (!token) res.status(401).json({ message: "Authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Authorization denied" });
    }
};

module.exports = { verifyJsonwebtoken };
