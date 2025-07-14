import express from "express";
import { register, login, logout } from "../controller/auth.js";
import { verifyUser } from "../middleware/verifyToken.js";

const router = express.Router();

//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

//LOGOUT
router.post("/logout", logout);

export default router;
