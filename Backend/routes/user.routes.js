const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middlewares"); // Fixed casing for consistency


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
    body("confirmPassword")
      .custom((value, { req }) => {
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

// ===== Get User Profile Route =====
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

// ===== Logout User Route =====
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;