import express from "express";
import { signup, login } from "../Controllers/userController.js";
import { isConnected, secretAccess } from "../Middlewares/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/secret", isConnected, secretAccess);

export default router;
