const BankDetail = require("../Models/bankdetails.model");
const User = require("../Models/user.model");
const bankDetailService = require("../Services/bank.detail.service");

module.exports.addBankDetail = async (req, res) => {
  try {
    const { bankName, recipientName, accountNumber, email, ifscCode } =
      req.body;
    const userId = req.user._id;

    const existingAccount = await BankDetail.findOne({ accountNumber });
    if (existingAccount) {
      return res.status(400).json({ message: "Account number already exists" });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (!ifscCode || !/^[A-Z]{4}[0-9]{7}$/.test(ifscCode)) {
      return res.status(400).json({ message: "Invalid IFSC code format" });
    }

    // Add new bank detail
    const newBankDetail = await bankDetailService.addBankDetail(
      bankName,
      recipientName,
      accountNumber,
      email,
      ifscCode,
      userId
    );

    const user = await User.findById(userId);
    if (!Array.isArray(user.activeAccounts)) {
      user.activeAccounts = [];
      await user.save();
    }

    // Update the user's activeAccounts field
    await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          activeAccounts: newBankDetail._id,
        },
      },
      { new: true, upsert: true }
    );

    res.status(201).json({
      message: "Bank details added successfully",
      data: newBankDetail,
    });
  } catch (err) {
    console.log("Error in bank detail controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getAllBankDetails = async (req, res) => {
  try {
    const userId = req.user._id;

    const bankDetails = await BankDetail.find({ user: userId }).sort({
      createdAt: -1,
    });
    console.log("Bank details", bankDetails);

    if (!bankDetails || bankDetails.length === 0) {
      return res.status(404).json({ message: "No bank details found" });
    }

    return res.status(200).json({
      message: "Bank details fetched successfully",
      data: bankDetails,
    });
  } catch (err) {
    console.error("Error in getAllBankDetails controller:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
