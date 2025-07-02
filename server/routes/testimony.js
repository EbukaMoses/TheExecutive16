import express from "express";;
import { createTestimony, deleteTestimony, updateTestimony, getTestimonies } from "../controller/testimony.js";

const router = express.Router();

//CREATE
router.post("/create-Testimony", createTestimony);

//UPDATE
router.put("/update-Testimony/:id", updateTestimony); 

//DELETE
router.delete("/delete-Testimony/:id", deleteTestimony);

//GET ALL
router.get("/get-all-Testimony", getTestimonies);

export default router;
