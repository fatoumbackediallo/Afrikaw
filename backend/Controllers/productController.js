import Product from "../Models/productModel.js";
import Cart from "../Models/cartModel.js";

//Lister les produits qui existent
export const getProductsList = async (req, res) => {
  try {
    let p = await Product.find();
    res.status(200).json(p);
  } catch (err) {
    res.status(400).json({ message: "Produits non trouvés" });
  }
};

//Créer un produit (autorisé juste pour l'admin)
export const createProduct = async (req, res) => {
  try {
    let {
      nom,
      prix,
      description,
      photo,
      quantiteDispo,
      Likes,
      createdAt,
      updatedAt,
    } = req.body;
    let p = await Product.create({
      nom,
      prix,
      description,
      photo,
      quantiteDispo,
      Likes,
      createdAt,
      updatedAt,
    });
    res.status(200).json(p);
  } catch (err) {
    return res.status(400).json(err);
  }
};

//choisir et afficher les informations du produit : nom, description, prix, quantité, disponibilité
export const showProductDetail = async (req, res) => {
  try {
    let p = await Product.find({ _id: req.params.id });
    res.status(200).json(p);
  } catch (err) {
    res.status(400).json({ message: "Produit non disponible" });
  }
};

//ajouter le produit au panier
export const addProductOnCart = async (req, res) => {
  try {
    let p = await Product.find({ _id: req.params.id });
    let cart = await Cart.find({ _id: req.params.id });
    cart.products.push(p.id);
    res.status(200).json({ message: "produit bien ajouté" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Mettre à jour le produit
export const updateProduct = async (req, res) => {
  try {
    let { nom, prix, description, photo, quantiteDispo, Likes, updatedAt } =
      req.body;
    let p = await Product.find(
      nom,
      prix,
      description,
      photo,
      quantiteDispo,
      Likes,
      updatedAt
    );
    p.nom = newName;
    p.prix = newPrix;
    p.description = newDescription;
    p.photo = newPhoto;
    p.quantiteDispo = newQuantiteDispo;
    p.likes = newlikes;
    p.updateAt = newDate;
    p.save();
    res.status(200).json({ message: "produit modifié" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Supprimer le produit

export const deleteProduct = async (req, res) => {
  try {
    let p = await Product.find({ _id: req.params.id });
    p.delete();
    res.status(200).json({ message: "produit supprimé" });
  } catch (err) {
    res.status(400).json(err);
  }
};
