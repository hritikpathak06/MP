const userSchema = require('../model/userSchema');
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await userSchema.findOne({ _id: verifytoken._id, "tokens.token": token })

        if (!rootUser) { throw new Error("User not found") }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();


    } catch (error) {
        res.status(401).send("Unauthorised! No token Matched")
        console.log(error);
    }
}

module.exports = authenticate;