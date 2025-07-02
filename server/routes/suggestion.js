import express from "express";;
import { createSuggestion, deleteSuggestion, updateSuggestion, getSuggestions } from "../controller/suggestion.js";

const router = express.Router();

//CREATE
router.post("/create-suggestion", createSuggestion);

//UPDATE
router.put("/update-suggestion/:id", updateSuggestion); 

//DELETE
router.delete("/delete-suggestion/:id", deleteSuggestion);

//GET ALL
router.get("/get-all-suggestion", getSuggestions);

export default router;
