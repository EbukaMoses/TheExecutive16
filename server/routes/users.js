import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} from "../controller/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Welcome, you are Authenticated");
});
router.get("/checkauth/:id", verifyUser, (req, res, next) => {
  res.send("Logged in and can delete");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Logged in as Admin");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
