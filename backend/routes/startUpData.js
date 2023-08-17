import express from "express";
import {
  createStartUpController,
  editOnePager,
  editStartUpIntroMessage,
  editStartUpOneLink,
  getOnePagerController,
  startUpData,
  investNowController,
} from "../controllers/startUpController.js";
const router = express.Router();

// Get startup data
router.get("/details/:userId", startUpData);

// Create a new startUp
router.post("/createStartup", createStartUpController);

// OneLink Page
router.patch("/onelink", editStartUpOneLink);
router.patch("/introMessage", editStartUpIntroMessage);
router.put("/onePager", editOnePager);

// Phase 2
// OneLink Page Data
router.get("/getOnePager", getOnePagerController);

router.post("/investNow", investNowController);

export default router;
