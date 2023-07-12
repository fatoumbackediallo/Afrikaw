import express from "express";
import {
  getCartProducts,
  deleteProductOnCart,
  updateCart,
  deleteCart,
} from "../Controllers/cartController.js";
import { isConnected } from "../Middlewares/auth.js";

const router = express.Router();

router.get("/", isConnected, getCartProducts);
router.delete("/", isConnected, deleteProductOnCart);
router.patch("/", isConnected, updateCart);
router.delete("/", isConnected, deleteCart);

export default router;
