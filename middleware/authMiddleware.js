const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const expectedToken = `Bearer ${process.env.ADMIN_TOKEN}`;

  if (token !== expectedToken) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  next();
};

module.exports = authMiddleware;
