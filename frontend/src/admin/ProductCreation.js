import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FormStyle.css";
import { TextField } from "@mui/material";
// import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";

export default function ProductCreation() {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const [token, setToken] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescript, setProductDescript] = useState("");
  const [productPhoto, setProductPhoto] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = {
      nom: productName,
      prix: productPrice,
      description: productDescript,
      photo: productPhoto,
      quantiteDispo: productQuantity,
    };
    axios
      .post("http://localhost:3100/product", admin, config)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/board");
      })
      .catch((err) => console.log("erreur"));
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <TextField
        id="outlined-required"
        type="nom"
        label="Required"
        placeholder="Nom du produit"
        value={productName}
        size="normal"
        margin="normal"
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        type="prix"
        id="outlined-required"
        label="Required"
        placeholder="prix"
        value={productPrice}
        size="normal"
        margin="normal"
        onChange={(e) => setProductPrice(e.target.value)}
        // startAdornment={<InputAdornment position="end">€</InputAdornment>}
      />

      <TextField
        type="description"
        id="outlined-required"
        label="Required"
        placeholder="description"
        value={productDescript}
        size="normal"
        margin="normal"
        onChange={(e) => setProductDescript(e.target.value)}
      />
      <TextField
        type="photo"
        id="outlined-required"
        label="Required"
        placeholder="photo"
        value={productPhoto}
        size="normal"
        margin="normal"
        onChange={(e) => setProductPhoto(e.target.value)}
      />
      <TextField
        type="quantité"
        id="outlined-required"
        label="Required"
        placeholder="quantité"
        value={productQuantity}
        size="normal"
        margin="normal"
        onChange={(e) => setProductQuantity(e.target.value)}
      />

      <button className="customizedButton">Ajouter</button>
    </form>
  );
}
