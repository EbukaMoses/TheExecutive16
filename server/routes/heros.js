import express from "express";;
import { createHeros, deleteHeros, updateHeros, getHeros } from "../controller/heros.js";

const router = express.Router();

//CREATE
router.post("/create-heros", createHeros);

//UPDATE
router.put("/update-heros/:id", updateHeros); 

//DELETE
router.delete("/delete-heros/:id", deleteHeros);

//GET ALL
router.get("/get-all-heros", getHeros);

export default router;
