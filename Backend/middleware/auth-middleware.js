const jwt = require("jsonwebtoken")
const { Tourist, Local } = require("../models/user_schema")

const verification = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "not able to read token" })
    }
    const jwtToken = token.replace("Bearer ", "").trim();
    try {
        const isVerified = jwt.verify(jwtToken, process.env.jwt_secret_token);
        let userData = await Local.findOne({ email: isVerified.email }).select({ password: 0 });
        req.isLocal = true;
        if (!userData) {
            userData = await Tourist.findOne({ email: isVerified.email }).select({password : 0});
            req.isLocal = false;
        }
        if (!userData) {
            throw new Error("User not found");
        }

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.error("JWT verification error:", error.message);
        res.status(401).json({ message: "Unautorized: invalid token" })
    }
};

module.exports = verification;