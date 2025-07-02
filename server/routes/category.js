import express from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controller/category.js";

const router = express.Router();


//CREATE
router.post("/create-category", createCategory);

//UPDATE
router.put("/update-category/:id", updateCategory); 

//DELETE
router.delete("/delete-category/:id", deleteCategory);


//GET ALL
router.get("/get-all-categories", getCategories);

export default router;
