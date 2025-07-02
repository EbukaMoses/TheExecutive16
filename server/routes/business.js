import express from "express";
import { upload } from "../middleware/uploadSingleImg.js";
import { createBusiness } from "../controller/business.js";

const router = express.Router();

router.post("/create-business", upload.single("file"), createBusiness);

export default router;