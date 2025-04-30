const mongoose = require("mongoose");

// Transaction schema for deposits and withdrawals
const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    type: {
      type: String,
      enum: ["deposit", "withdrawal"],
      required: [true, "Transaction type is required"],
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [1, "The minimum amount should be greater than 1"],
      validate: {
        validator: (v) => v > 0,
        message: "Amount must be a positive number.",
      },
    },

    status: {
      type: String,
      enum: ["pending", "completed", "failed", "cancelled"],
      default: "pending",
      required: true,
    },

    method: {
      type: String,
      enum: ["upi", "bank_transfer", "wallet", "card", "other"],
      required: [true, "Payment method is required"],
    },

    transactionId: {
      type: String,
      unique: true,
      sparse: true,
      default: null,
      validate: {
        validator: function (v) {
          return v === null || /^[A-Za-z0-9]{10,}$/g.test(v);
        },
        message:
          "Transaction ID must be alphanumeric and at least 10 characters long.",
      },
    },

    failedAt: Date,
    cancelledAt: Date,
    completedAt: Date,

    tax: {
      type: Number,
      default: 0,
    },

    accountDetails: {
      bankName: String,
      accountNumber: String,
      ifsc: String,
      upiId: String,
      accountType: {
        type: String,
        enum: ["savings", "current"],
      },
    },

    orderNumber: {
      type: String,
      unique: true,
      required: true,
    },

    adminNote: {
      type: String,
      default: "",
    },

    balanceBefore: {
      type: Number,
      default: 0,
    },

    balanceAfter: {
      type: Number,
      default: 0,
    },

    // Mining related
    miningRate: {
      type: Number,
      default: 0,
    },

    minedAt: Date,

    userNote: {
      type: String,
      default: "",
    },

    withdrawalLimit: {
      type: Number,
      default: 10000,
    },
  },
  { timestamps: true }
);

// Instance Methods (for individual transaction objects)

// General helpers
transactionSchema.methods.isPending = function () {
  return this.status === "pending";
};

transactionSchema.methods.isValidTransactionId = function () {
  return /^[A-Za-z0-9]{10,}$/.test(this.transactionId || "");
};

// ----------------- Withdrawal Specific -------------------
transactionSchema.methods.isWithdrawal = function () {
  return this.type === "withdrawal";
};

transactionSchema.methods.canWithdraw = function () {
  return this.amount > 0 && this.amount <= this.withdrawalLimit;
};

transactionSchema.methods.canProcessWithdrawal = function () {
  return (
    this.isPending() &&
    this.isWithdrawal() &&
    this.isValidTransactionId() &&
    this.canWithdraw()
  );
};

transactionSchema.methods.markAsCompleted = function (adminNote = "") {
  this.status = "completed";
  this.adminNote = adminNote;
  this.completedAt = new Date();
  return this.save();
};

transactionSchema.methods.markAsFailed = function (reason = "") {
  this.status = "failed";
  this.adminNote = reason;
  this.failedAt = new Date();
  return this.save();
};

transactionSchema.methods.markAsCancelled = function (reason = "") {
  this.status = "cancelled";
  this.adminNote = reason;
  this.cancelledAt = new Date();
  return this.save();
};

// ------------------ Deposit Specific -------------------
transactionSchema.methods.isDeposit = function () {
  return this.type === "deposit";
};

transactionSchema.methods.isValidDepositAmount = function () {
  return this.amount > 0;
};

transactionSchema.methods.completeDeposit = function (note = "") {
  this.status = "completed";
  this.adminNote = note;
  this.completedAt = new Date();
  return this.save();
};

transactionSchema.methods.failDeposit = function (reason = "") {
  this.status = "failed";
  this.adminNote = reason;
  this.failedAt = new Date();
  return this.save();
};

// Static Methods (for multiple transactions)


// Withdrawals 

transactionSchema.static.getPendingWithdrawals=async function(){
  return this.find({status:'pending',type:'withdrawal'})
}
  
//Get 10 withdrawals transaction of a user
transactionSchema.statics.getUserWithdrawals = async function (userId) {
  return this.find({ user: userId, type: "withdrawal" }).sort({createdAt:-1}).limit(10);
};

transactionSchema.statics.getCompletedWithdrawals = async function () {
  return this.find({ type: "withdrawal", status: "completed" });
};

transactionSchema.statics.calculateTotalWithdrawals = async function (userId) {
  const txns = await this.find({ user: userId, type: "withdrawal", status: "completed" });
  return txns.reduce((sum, tx) => sum + tx.amount, 0);
};

// ------------------ Deposits ------------------
transactionSchema.statics.getPendingDeposits = async function () {
  return this.find({ status: "pending", type: "deposit" });
};

transactionSchema.statics.getUserDeposits = async function (userId) {
  return this.find({ user: userId, type: "deposit" }).sort({createdAt:-1})
.limit(10)};

transactionSchema.statics.getCompletedDeposits = async function () {
  return this.find({ type: "deposit", status: "completed" });
};

transactionSchema.statics.calculateTotalDeposits = async function (userId) {
  const txns = await this.find({ user: userId, type: "deposit", status: "completed" });
  return txns.reduce((sum, tx) => sum + tx.amount, 0);
};

// All types of transaction (withdrawals and deposits)
transactionSchema.statics.getUserTransactions = async function (userId, status) {
  return this.find({ user: userId, status });
};

transactionSchema.statics.createTransaction = async function (transactionData) {
  const transaction = new this(transactionData);
  return transaction.save();
};

// const Transaction = mongoose.model("Transaction", transactionSchema);
const Transaction=mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
