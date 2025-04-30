const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {query}=require('express-validator');

const bankDetailController = require("../Controllers/bank.detail.controller");
const authMiddleware = require("../Middlewares/auth.middlewares");

// Create a new Bank Detail
router.post("/add",authMiddleware.authUser ,[
  body("bankName")
    .notEmpty()
    .withMessage("Bank name is required")
    .isString()
    .withMessage("Bank name must be a string")
    .isLength({ min: 3 })
    .withMessage("Bank name must be at least 3 characters long"),

  body("recipientName")
    .notEmpty()
    .withMessage("Recipient name is required")
    .isString()
    .withMessage("Recipient name must be a string")
    .isUppercase()
    .withMessage("Recipient name must be in uppercase")
    .isLength({ min: 3 })
    .withMessage("Recipient name must be at least 3 characters long"),

  body("accountNumber")
    .notEmpty()
    .withMessage("Account number is required")
    .isNumeric()
    .withMessage("Account number must be a numeric value")
    .isLength({ min: 9, max: 18 })
    .withMessage("Account number must be between 9 to 18 digits")
    .matches(/^\d+$/)
    .withMessage("Account number must only contain digits"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address")
    .toLowerCase()
    .isLength({ min: 3 })
    .withMessage("Email must be at least 3 characters long"),

  body("ifscCode")
    .notEmpty()
    .withMessage("IFSC code is required")
    .isString()
    .withMessage("IFSC code must be a string")
    .isLength({ min: 11, max: 11 })
    .withMessage("IFSC code must be exactly 11 characters long")
    .matches(/^[A-Z]{4}[0-9]{7}$/)
    .withMessage("Invalid IFSC code format"),
],bankDetailController.addBankDetail);

//Get all active bank details of a user
router.get('/getAllBank',authMiddleware.authUser,bankDetailController.getAllBankDetails)

module.exports=router;
