const express = require("express");
const router = express.Router();
const { getCars, addCar } = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/api/cars", getCars);
router.post("/api/cars", authMiddleware, addCar);

module.exports = router;
