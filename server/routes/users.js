import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  approveUser,
  getUsers,
} from "../controller/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middleware/verifyToken.js";
import { logout } from "../controller/auth.js";

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
router.put("/update-user/:id",verifyUser, updateUser);

//VERIFY USER
router.put("/approve-user/:id", verifyAdmin, approveUser);

//DELETE
router.delete("/delete-user/:id", verifyAdmin, deleteUser);

//GET
router.get("/get-user/:id",verifyUser, getUser);

//GET ALL
router.get("/get-all-users/", getUsers);


export default router;
