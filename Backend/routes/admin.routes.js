const express = require("express");
const { body, param, validationResult } = require("express-validator");
const router = express.Router();
const { LoginLimiter } = require("../Middlewares/rateLimiter");
const adminController = require("../Controllers/admin.controller");
const authMiddleware = require("../Middlewares/auth.middlewares");
const adminAuth = require("../Middlewares/admin.auth.middleware");
const { refreshAccessToken } = require("../Middlewares/auth.middlewares");

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};

router.post("/refresh-token", refreshAccessToken);

//Admin Registration
router.post("/register", handleValidation, adminController.createAdmin);

//Admin Login
router.post(
  "/login",
  [
    body("mobileNumber").isMobilePhone().withMessage("Invalid mobile number"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  handleValidation,
  adminController.adminLogin
);

//Admin Logout
router.post(
  "/logout",
  authMiddleware.authUser,
  adminAuth,
  adminController.adminLogout
);

router.post(
  "/update-password",
  authMiddleware.authUser,
  adminAuth,
  [
    body("oldPassword").notEmpty().withMessage("Current password is required"),
    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("New password must be at least 6 characters"),
  ],
  handleValidation,
  authMiddleware.authUser,
  adminController.updatePassword
);

// Get all users
router.get(
  "/users",
  authMiddleware.authUser,
  adminAuth,
  adminController.getUserList
);

// Get single user details
router.get(
  "/users/:userId",
  authMiddleware.authUser,
  adminAuth,
  param("userId").isMongoId().withMessage("Invalid User ID"),
  handleValidation,
  adminController.getUserDetails
);

// Update user info (name, mobile, wallet, password, for General updates.)
router.patch(
  "/users/:userId",
  authMiddleware.authUser,
  adminAuth,
  [
    param("userId").isMongoId().withMessage("Invalid User ID"),
    body("name").optional().isString().withMessage("Name must be a string"),
    body("mobile")
      .optional()
      .isMobilePhone()
      .withMessage("Invalid mobile number"),
    body("wallet")
      .optional()
      .isNumeric()
      .withMessage("Wallet must be a number"),
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  handleValidation,
  adminController.updateUser
);

// Activate/Deactivate user
router.patch(
  "/users/:userId/active",
  authMiddleware.authUser,
  adminAuth,
  [
    param("userId").isMongoId().withMessage("Invalid User ID"),
    body("isActive").isBoolean().withMessage("isActive must be a boolean"),
  ],
  handleValidation,
  adminController.setUserActiveStatus
);

// Withdraw history
router.get(
  "/withdraw-history",
  authMiddleware.authUser,
  adminAuth,
  adminController.getWithdrawHistory
);

// Deposit history
router.get(
  "/deposit-history",
  authMiddleware.authUser,
  adminAuth,
  adminController.getDepositHistory
);

// Transfer funds (admin -> user)
router.post(
  "/users/:userId/transfer-funds",
  authMiddleware.authUser,
  adminAuth,
  [
    param("userId").isMongoId().withMessage("Invalid User ID"),
    body("amount").isNumeric().withMessage("Amount must be a number"),
    body("type")
      .isIn(["credit", "debit"])
      .withMessage("Type must be 'credit' or 'debit'"),
    body("note").optional().isString().withMessage("Note must be a string"),
  ],
  handleValidation,
  adminController.adminTransferFunds
);

// Dashboard stats
router.get(
  "/dashboard-stats",
  authMiddleware.authUser,
  adminAuth,
  adminController.getAdminDashboardStats
);

module.exports = router;
