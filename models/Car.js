const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => /^\d{4}$/.test(value),
      message: "Year must be a 4-digit number",
    },
  },
  fuel_type: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  status: { type: String, default: "available" },
});

module.exports = mongoose.model("Car", carSchema);
