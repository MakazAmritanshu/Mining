const mongoose = require("mongoose");

const bankDetailSchema = new mongoose.Schema(
  {
    //linking bankdetails model with the  user model
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    recipientName: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\d{9,18}$/.test(v); // Only 9 to 18 digits allowed
        },
        message: (props) => `${props.value} is not a valid account number!`,
      },
    },
    ifscCode: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid IFSC code!`,
      },
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
  },
  { timestamps: true }
);

const BankDetail = mongoose.model("BankDetail", bankDetailSchema);

module.exports = BankDetail;
