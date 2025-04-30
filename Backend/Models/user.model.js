const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: () => `Mobile number must be a 10-digit number`,
      },
    },

    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters long"],
      required: false,
    },

    referralCode: {
      type: String,
      unique: true,
      sparse: true,
    },

    referredBy: {
      type: String,
      default: null,
    },

    //Financial fields
    balance: {
      type: Number,
      default: 0,
    },
    miningRate: {
      type: Number,
      default: 0,
    },
    withdrawableAmount: {
      type: Number,
      default: 0,
    },
    superCoin: {
      type: Number,
      default: 0,
    },

    // Active bank account (Reference to BankDetail Model)
    activeAccounts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BankDetail", // Reference to BankDetail model
      },
    ],

    otpHash: {
      type: String,
    },

    otpExpiresAt: {
      type: Date, // NO auto-delete anymore, manual expiry check only(always prefer manual expiry check)
    },

    isOtpVerified: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Generate OTP
userSchema.methods.generateOtp = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
  this.otpHash = crypto.createHash("sha256").update(otp).digest("hex"); // Hash the OTP
  this.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes
  return otp; // Return plain OTP for sending via SMS
};

// Verify OTP
userSchema.methods.verifyOtp = function (otp) {
  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");
  if (this.otpHash !== otpHash) {
    return { success: false, message: "Invalid OTP" };
  }
  if (this.otpExpiresAt < new Date()) {
    return { success: false, message: "OTP has expired" };
  }
  this.isOtpVerified = true;

  return { success: true, message: "OTP verified successfully" };
};

// Hash password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Prevent model overwrite
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
