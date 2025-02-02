import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripeOrder,
} from "../controllers/orderController.js";

// Admin Features
const orderRouter = express.Router();
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment features

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// User Features

orderRouter.post("/userorders", authUser, userOrders);

// verify payment
orderRouter.post("/verifyStripeOrder", authUser, verifyStripeOrder);

export default orderRouter;
