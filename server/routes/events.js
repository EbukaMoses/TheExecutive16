import express from "express";
import { createEvent, deleteEvent, updateEvent, getEvents } from "../controller/events.js";

const router = express.Router();

//CREATE
router.post("/create-event", createEvent);

//UPDATE
router.put("/update-event/:id", updateEvent); 

//DELETE
router.delete("/delete-event/:id", deleteEvent);

//GET ALL
router.get("/get-all-events", getEvents);

export default router;
