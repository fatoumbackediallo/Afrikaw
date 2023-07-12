import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FormStyle.css";
import { TextField } from "@mui/material";
import axios from "axios";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios
      .post("http://localhost:3100/connect/login", user)
      .then((res) => {
        console.log("connecté");
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/");
      })
      .catch((err) => console.log("erreur"));
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
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
      <button className="customizedButton">Se connecter</button>
    </form>
  );
}
