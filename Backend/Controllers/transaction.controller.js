const transactionService = require("../services/transaction.service");
const Transaction = require("../Models/transaction.model");

module.exports.addDeposit = async (req, res) => {
  try {
    const { amount, method, accountDetails } = req.body;
    const user = req.user;

    // service to handle deposit logic
    const newTransaction = await transactionService.addDepositService(
      user,
      amount,
      method,
      accountDetails
    );

    return res.status(201).json({
      message: "Deposit transaction created",
      transaction: newTransaction,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

module.exports.getAllDepositTransaction = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User ID missing from request" });
    }

  
    const transactions=await Transaction.getUserDeposits((userId));

    if (!transactions) {
      return res.status(404).json({ message: "No deposit transactions found" });
    }

    res.status(200).json({
      message: "Deposit transactions fetched successfully",
      transactions,
    });
  } catch (err) {
    console.error("Error fetching deposit transactions:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.addWithdrawal = async (req, res) => {
  try {
    const { amount, method, accountDetails, transactionId } = req.body;
    const user = req.user;

    //service to handle withdraw logic
    const newTransaction = await transactionService.addWithdrawalService(
      user,
      amount,
      method,
      accountDetails,
      transactionId
    );

    return res.status(201).json({
      message: "Withdrawal transaction created",
      transaction: newTransaction,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

module.exports.getAllWithdrawTransaction=async(req,res)=>{

  try{
    const userId=req.user._id;
    if(!userId){
      res.status(400).json({message:"User Id misssing from request"});
    }

    const transactions=await Transaction.getUserWithdrawals(userId);
   
    if(!transactions){
      return res.status(404).json({message:'No withdraw transactions found'});

    }
    res.status(200).json({
      message:'Withdraw transactions fetched successfully',
      transactions:transactions
    })

  }
  catch(err){
    console.log('Error fetching withdraw transactions',err);
    res.status(500).json({message:'Internal Server Error'})
  }
}
