const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const verified = jwt.verify(token, "passwordkey");
    if (!verified) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = verified.id;
    req.token = token;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(500).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
