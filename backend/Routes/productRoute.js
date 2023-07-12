import express from "express";
import {
  getProductsList,
  createProduct,
  showProductDetail,
  addProductOnCart,
  updateProduct,
  deleteProduct,
} from "../Controllers/productController.js";
import { isAuthorized, isConnected } from "../Middlewares/auth.js";

const router = express.Router();

router.get("/", getProductsList);
router.post("/", isConnected, isAuthorized, createProduct);
router.get("/", showProductDetail);
router.post("/", addProductOnCart);
router.patch("/", isConnected, isAuthorized, updateProduct);
router.delete("/", isConnected, isAuthorized, deleteProduct);

export default router;
