import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../css/BoardStyle.css";
import { useNavigate } from "react-router-dom";

export default function Board() {
  const navigate = useNavigate();

  return (
    <div className="boxStyle">
      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/J7266TWK/image2.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
            onClick={navigate("/board/productCreation")}
          >
            Ajouter un produit
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/W1b7sgjt/image3.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
          >
            Modifier un produit
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/N02Cwm7m/websiteplanet-dummy-400-X400.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
          >
            Supprimer un produit
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/J7266TWK/image2.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
          >
            Gestion des stocks
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/W1b7sgjt/image3.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
          >
            Gestion des livraisons
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, height: 200, m: 5, boxShadow: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 120 }}
          image="https://i.postimg.cc/N02Cwm7m/websiteplanet-dummy-400-X400.png"
          title="nos produits"
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#1abc9c",
              borderRadius: 3,
              color: "black",
              fontSize: 13,
              margin: 2,
              size: "small",
              padding: 1,
              variant: "contained",
            }}
          >
            Gestion des approvisionnements
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
