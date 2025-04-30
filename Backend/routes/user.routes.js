const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middlewares");

//User Registration Route
router.post(
  "/register",
  [
    body("mobileNumber")
      .isString()
      .withMessage("Mobile number must be a string")
      .matches(/^\d{10}$/)
      .withMessage("Mobile number must be exactly 10 digits"),
    body("otp")
      .isString()
      .withMessage("OTP must be a string")
      .matches(/^\d{6}$/)
      .withMessage("OTP must be exactly 6 digits"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password must match Password");
      }
      return true;
    }),
    body("referredBy")
      .optional()
      .isString()
      .withMessage("Referral code must be a string"),
  ],
  userController.registerUser
);

//Login Route
router.post(
  "/login",
  [
    body("mobileNumber")
      .isString()
      .withMessage("Mobile number must be a string")
      .matches(/^\d{10}$/)
      .withMessage("Mobile number must be exactly 10 digits"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

//Add a user bank account
router.post(
  "/account/add",
  [
    body("bankName").notEmpty(),
    body("accountNumber").notEmpty(),
    body("ifsc").notEmpty(),
    body("upiId").optional(),
    body("accountType").isIn(["savings", "current"]),
    authMiddleware.authUser
  ],
  userController.addBankAccount
);


//  Get User Profile Route
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

// Logout User Route
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
