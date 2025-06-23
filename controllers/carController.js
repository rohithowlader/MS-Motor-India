const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({}, "brand model year fuel_type price status");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addCar = async (req, res) => {
  try {
    const { brand, model, year, fuel_type, price, status } = req.body;

    if (!brand || !model || !year || !fuel_type || price == null) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!/^\d{4}$/.test(year.toString())) {
      return res.status(400).json({ error: "Year must be 4 digits" });
    }

    if (isNaN(price) || price < 0) {
      return res.status(400).json({ error: "Price must be a positive number" });
    }

    const car = new Car({ brand, model, year, fuel_type, price, status });
    await car.save();
    res.status(201).json({ message: "Car added successfully", car });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
