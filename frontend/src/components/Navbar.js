import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="navForm">
      <div>
        <img alt="logo" src={Logo} className="logo" />
      </div>
      <div className="linkBoxStyle">
        <Link to="/" className="linkForm">
          Accueil
        </Link>
        <Link to="/connexion" className="linkForm">
          Connexion
        </Link>
        <Link to="/inscription" className="linkForm">
          Inscription
        </Link>
      </div>
    </nav>
  );
}
