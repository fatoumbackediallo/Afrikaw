import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  idCart: {
    type: Number,
    required: true,
  },
  //lier le panier à l'idClient et l'idProduit
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", default: [] },
  ],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
