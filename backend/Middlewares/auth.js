import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";

export const isConnected = (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  console.log(token);
  jwt.verify(token, "RANDOM_TOKEN_SECRET", function (erreur, payload) {
    if (erreur) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      console.log(payload);
      req.payload = payload;
      next();
    }
  });
};

export const secretAccess = async (req, res) => {
  res.send("Accès validé");
};

export const isAuthorized = async (req, res, next) => {
  let user = await User.findById(req.payload.id_utilisateur);

  if (user.role == "user") {
    res.status(401).json({ message: "Action non autorisée" });
  } else next();
};
