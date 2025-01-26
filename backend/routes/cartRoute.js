import express from "express";
import { addToCart , getUserCart, updateCart } from "../controllers/cartController";

const cartRouter = express.Router();
cartRouter.post("/get", getUserCart);
cartRouter.post("/add", addToCart);
cartRouter.post("/update", updateCart);
