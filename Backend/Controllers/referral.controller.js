// controllers/referral.controller.js
const { validationResult } = require("express-validator");
const User = require("../models/user.model"); // Adjust path if needed



// Get Referral Stats
exports.getReferralStats = async (req, res) => {
  try {
    const user = req.user;
    const stats = user.getReferralStats();
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ message: "Failed to get referral stats", error: err.message });
  }
};



// Get Downline List at a Specific Level
exports.getDownlineAtLevel = async (req, res) => {
  const level = req.params.level;

  try {
    const user = req.user;
    const downlines = user.getDownlineAtLevel(level);
    res.status(200).json({ level, downlines });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch downlines", error: err.message });
  }
};

// Payout Referral Reward
exports.payoutReferralReward = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const user = req.user;
    const { amount } = req.body;

    if (amount > user.totalReferralEarning || amount > user.balance) {
      return res.status(400).json({ message: "Insufficient referral balance" });
    }

    user.totalReferralEarning -= amount;
    user.balance -= amount;
    user.withdrawableAmount += amount;

    user.calculateTotalEarnings();
    await user.save();

    res.status(200).json({ message: "Referral payout successful", newBalance: user.balance });
  } catch (err) {
    res.status(500).json({ message: "Payout failed", error: err.message });
  }
};
