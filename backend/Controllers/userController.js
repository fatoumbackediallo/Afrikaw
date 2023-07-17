import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

export const signup = async (req, res) => {
  try {
    let user = await userModel.create(req.body);
    res.status(200).json({ message: "User créé" });
  } catch (err) {
    res.status(400).json({ message: "Erreur inscription" });
  }
};

export const login = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    console.log(user);
    console.log(req.body.password);
    console.log(user.password);
    let isMatch = await bcrypt.compare(req.body.password, user.password);

    if (user) {
      if (isMatch) {
        res.status(200).json({
          id_utilisateur: user._id,
          token: jwt.sign({ id_utilisateur: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "2h",
          }),
        });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else res.status(400).json({ message: "Invalid email" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
