import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import cors from "cors";

let app = express();

const URI =
  "mongodb+srv://fatou_diallo:Kemadiba110417@piiquante.amehr64.mongodb.net/";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Afrikaw",
  })
  .then(() => console.log("Connection success on MongoDB !"))
  .catch(() => console.log("Connection failed on MongoDB !"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/connect", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

let port = 3100;
app.listen(port, () => console.log(`operationnel server on ${port}`));
