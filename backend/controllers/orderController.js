import orderModel from "../models/orderModel.js"; // Fixed capitalization typo
import userModel from "../models/userModel.js";
import Chapa from "chapa-nodejs";

//gate way initialize

const chapa = new Chapa(process.env.CHAPA_SECRET_KEY);

// Placing order cash on delivery method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD", // Cash on Delivery
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing order using Stripe method
const placeOrderChapa = async (req, res) => {
  const { userId, items, amount, address } = req.body;

  const { origin } = req.headers;
};

// Placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {
  // Implementation for placing order using Razorpay
};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Order data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update Order Status for Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderChapa,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
