import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  description: { type: String, unique: true },
  photo: { type: String, required: true },
  quantiteDispo: { type: Number, default: 1 },
  Likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Product = mongoose.model("product", productSchema);

export default Product;
