const mongoose = require("mongoose");

const gpuCardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g., RTX 3080
    hashRate: { type: Number, required: true }, // e.g., 100 (MH/s)
    powerConsumption: { type: Number, required: true }, // in watts
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: ["High-End", "Mid-Range", "Budget"],
      required: true,
    },
    dailyMiningRate: { type: Number, required: true }, // e.g., coins per day
  },
  { timestamps: true }
);

const GpuCard = mongoose.model("GpuCard", gpuCardSchema);
module.exports = GpuCard;
