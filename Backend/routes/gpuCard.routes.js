const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const gpuCardController = require("../Controllers/gpuCard.controller");
const authMiddleware = require('../Middlewares/auth.middlewares');
const adminAuth = require('../Middlewares/admin.auth.middleware');

// Valid GPU categories
const validCategories = ["High", "Mid", "Low"];

// Create a new Gpu Card
router.post(
  "/",
  adminAuth,
  [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("hashRate").isNumeric().withMessage("Hash rate must be a number"),
    body("powerConsumption")
      .isNumeric()
      .withMessage("Power Consumption must be a number"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("category")
      .isIn(validCategories)
      .withMessage("Invalid Category"),
    body("cardMiningRate")
      .isNumeric()
      .withMessage("Daily mining rate must be a number"),
  ],
  gpuCardController.createGpuCard
);

// Get all Gpu Cards
router.get("/allGpu", gpuCardController.getAllGpuCards);

// Buy a Gpu Card
router.post(
  "/buy",
  authMiddleware.authUser,
  [body("gpuCard").isMongoId().withMessage("Invalid Gpu Card ID")],
  gpuCardController.buyGpuCard
);

// Upgrade a GPU Card
router.post(
  "/upgrade",
  authMiddleware.authUser,
  [
    body("oldGpuCardId").isMongoId().withMessage("Invalid old GPU card ID"),
    body("newGpuCardId").isMongoId().withMessage("Invalid new GPU card ID"),
  ],
  gpuCardController.upgradeGpuCard
);

// Get Single Gpu Card by Id
router.get(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid Gpu Card ID")],
  gpuCardController.getGpuCardById
);

// Update a Gpu Card by Id
router.patch(
  "/:id",
  adminAuth,
  [
    param("id").isMongoId().withMessage("Invalid Gpu Card ID"),
    body("name")
      .optional()
      .isString()
      .notEmpty()
      .withMessage("Name is required"),
    body("hashRate")
      .optional()
      .isNumeric()
      .withMessage("Hash rate must be a number"),
    body("powerConsumption")
      .optional()
      .isNumeric()
      .withMessage("Power Consumption must be a number"),
    body("price")
      .optional()
      .isNumeric()
      .withMessage("Price must be a number"),
    body("category")
      .optional()
      .isIn(validCategories)
      .withMessage("Invalid category"),
    body("cardMiningRate")
      .optional()
      .isNumeric()
      .withMessage("Daily mining rate must be a number"),
  ],
  gpuCardController.updateGpuCard
);

// Delete a GPU card by ID
router.delete(
  "/:id",
  adminAuth,
  [param("id").isMongoId().withMessage("Invalid GPU card ID")],
  gpuCardController.deleteGpuCard
);

module.exports = router;
