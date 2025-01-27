import express from "express";
import authUser from "../middleware/auth.js";

import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
const cartRouter = express.Router();

// Define cart routes
cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);

// Export the router
export default cartRouter;
