const Transaction = require("../models/transaction.model");
const User = require("../models/user.model");

// Service to create a deposit transaction
module.exports.addDepositService = async (user, amount, method, accountDetails) => {
  const transactionData = {
    user: user._id,
    type: "deposit",
    amount,
    method,
    accountDetails,
    status: "pending",
    orderNumber: generateOrderNumber(),
    transactionId:generateTransactionId(),
    balanceBefore: user.balance,
    balanceAfter: user.balance + amount,
  };

  const newTransaction = await Transaction.createTransaction(transactionData);

  // Mark as completed after creation
await newTransaction.completeDeposit("Auto deposit success");

  // Update the user's balance after deposit(UserModel profile will also change)
  user.balance += amount;
  await user.save();

  return newTransaction;
};

// Service to create a withdrawal transaction
module.exports.addWithdrawalService = async (user, amount, method, accountDetails, transactionId) => {
  if (amount > user.balance) {
    throw new Error("Insufficient funds");
  }

  const transactionData = {
    user: user._id,
    type: "withdrawal",
    amount,
    method,
    accountDetails,
    status: "pending",
    transactionId:generateTransactionId(),
    orderNumber: generateOrderNumber(),
    balanceBefore: user.balance,
    balanceAfter: user.balance - amount,
  };

  const newTransaction = await Transaction.createTransaction(transactionData);


  //Marks as status completed after withdrawal is completed
  await newTransaction.markAsCompleted("withdrawal success");



 //update the balance in user model
  user.balance -= amount;
  await user.save();

  return newTransaction;
};

//function to generate a unique order number
function generateOrderNumber() {
  return "ORD" + Date.now();
}

//function to generate a unique transactionId
const generateTransactionId = () => {
  return "TXN" + Math.random().toString(36).substr(2, 9); 
};

