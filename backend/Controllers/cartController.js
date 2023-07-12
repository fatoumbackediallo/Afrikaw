import Cart from "../Models/cartModel.js";

//vérifier que le panier contient des produits

//Afficher les produits, leur quantité, leur prix, leur disponibilité
export const getCartProducts = async (req, res) => {
  try {
    let cart = await Cart.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ message: "Panier vide" });
  }
};

//Supprimer un produit dans le panier
export const deleteProductOnCart = async (req, res) => {
  try {
    let cart = await Cart.find({ _id: req.params.id });
    cart.delete(id);
    res.status(200).json({ message: "Produit supprimé du panier" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Mettre à jour le panier
export const updateCart = async (req, res) => {
  try {
    let [products, updateAt] = req.body;
    let cart = await Cart.find[{ products, updateAt }];
    (cart.products = newCart), (cart.updateAt = newDate);
    cart.save();
    res.status(200).json({ message: "panier mis à jour" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Supprimer le panier
export const deleteCart = async (req, res) => {
  try {
    let cart = await Cart.find(req.body);
    cart.delete();
    cart.save();
    res.status(200).json({ message: "panier supprimé" });
  } catch (err) {
    res.status(400).json(err);
  }
};
