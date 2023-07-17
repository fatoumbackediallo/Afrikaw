// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import ConnexionAdmin from "./admin/ConnexionAdmin";
import Board from "./admin/Board";
import ProductCreation from "./admin/ProductCreation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexionAdmin" element={<ConnexionAdmin />} />
        <Route path="/connexionAdmin/board" element={<Board />} />
        <Route path="/board/productCreation" element={<ProductCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
