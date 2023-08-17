import express from "express";
import {
  uploadDocumentController,
  createFolderController,
  getFolderByUserController,
  getDocumentByUserController,
  getDocumentList,
} from "../controllers/documentDataController.js";
// import upload from "../utils/file.helper.js"
const router = express.Router();

router.get("/getDocument", getDocumentList);
router.post("/uploadDocument", uploadDocumentController);
router.post("/getDocumentsByUser", getDocumentByUserController);
router.post("/createFolder", createFolderController);
router.get("/getFolderByUser", getFolderByUserController);

export default router;
