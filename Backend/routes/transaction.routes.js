const express = require("express");
const { body } = require("express-validator");
const transactionController = require("../controllers/transaction.controller");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = express.Router();

//handle deposit Transaction
router.post(
  "/deposit",
  authMiddleware.authUser,
  [
    body("amount").isNumeric().withMessage("Amount must be a number").isFloat({ gt: 0 }).withMessage("Amount must be greater than 0"),
    body("method").isIn(["upi", "bank_transfer", "wallet", "card", "other"]).withMessage("Invalid payment method"),
    body("accountDetails").isObject().withMessage("Account details are required"),
  ],
  transactionController.addDeposit
);

//get all deposit transaction with a userId
router.get('/alldeposit',authMiddleware.authUser,transactionController.getAllDepositTransaction);

//handle Withdrwal deposit
router.post(
  "/withdraw",
  authMiddleware.authUser,
  [
    body("amount").isNumeric().withMessage("Amount must be a number").isFloat({ gt: 0 }).withMessage("Amount must be greater than 0"),
    body("method").isIn(["upi", "bank_transfer", "wallet", "card", "other"]).withMessage("Invalid payment method"),
    body("accountDetails").isObject().withMessage("Account details are required"),
    body("transactionId").optional().isLength({ min: 10 }).withMessage("Transaction ID must be at least 10 characters"),
  ],
  transactionController.addWithdrawal
);


//get all withdrwal transaction with a userId
router.get('/allWithdraw',authMiddleware.authUser,transactionController.getAllWithdrawTransaction);


module.exports = router;
