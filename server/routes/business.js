import express from "express";
import { upload } from "../middleware/cloudinaryImageUpload.js";
import { approveBusiness, createBusiness, deleteBusiness, getBusiness, getBusinesses, updateBusiness } from "../controller/business.js";

const router = express.Router();

router.post("/create-business", upload.single("file"), createBusiness);

//UPDATE
router.put("/update-business/:id", upload.single("file"), updateBusiness); 

//APPROVE
router.put("/approve-business/:id", approveBusiness); 

//DELETE
router.delete("/delete-business/:id", deleteBusiness);

//GET
router.get("/get-business/:id", getBusiness);

//GET ALL
router.get("/get-all-business", getBusinesses);

export default router;