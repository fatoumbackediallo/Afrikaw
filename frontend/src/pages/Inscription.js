import React, { useState } from "react";
// import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "../css/FormStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { fullname, email, password };
    axios
      .post("http://localhost:3100/connect/signup", user)
      .then((res) => navigate("/connexion"))
      .catch((err) => console.log("erreur"));
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <TextField
        id="outlined-required"
        type="fullname"
        label="Required"
        placeholder="Nom complet"
        value={fullname}
        size="normal"
        margin="normal"
        onChange={(e) => setFullname(e.target.value)}
      />
      <TextField
        id="outlined-required"
        type="email"
        label="Required"
        placeholder="Email"
        value={email}
        size="normal"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        id="outlined-required"
        label="Required"
        placeholder="Mot de passe"
        value={password}
        size="normal"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="customizedButton">S'inscrire</button>
    </form>
  );
}
