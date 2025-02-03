import orderModel from "../models/orderModel.js"; // Fixed capitalization typo
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import Chapa from "chapa"

// globale Variable
const currency = "usd";
const delivery_fee = 10;

//gate way initialize

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const chapa = new Chapa(process.env.CHAPA_SECRET_KY);

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
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "stripe", // Stripe payment method
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Fee",
        },
        unit_amount: delivery_fee * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,

      line_items,
      mode: "payment",
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Verify stripe order
const verifyStripeOrder = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing order using Razorpay method


// Placing order using Chapa method

const placeOrderChapa = async (req, res) => {
  // Placing order using Chapa method
  const placeOrderChapa = async (req, res) => {
    try {
      const { userId, items, amount, address } = req.body;

      const { origin } = req.headers;

      const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod: "chapa", // Chapa payment method
        payment: false,
        date: Date.now(),
      };

      const newOrder = new orderModel(orderData);
      await newOrder.save();

      // Prepare items for Chapa session
      const orderDetails = {
        amount: (amount + delivery_fee) * 100, 
        currency: currency.toUpperCase(), 
        email: req.body.email, 
        orderId: newOrder._id,
        callback_url: `${origin}/verify?paymentMethod=chapa&orderId=${newOrder._id}`,
      };

      // Create Chapa payment session
      const chapaSession = await chapa.paymentRequest(orderDetails);

      // Return the Chapa payment URL to the client
      if (chapaSession && chapaSession.payment_url) {
        res.json({ success: true, session_url: chapaSession.payment_url });
      } else {
        throw new Error("Failed to create Chapa payment session");
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: error.message });
    }
  };
}

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
  placeOrderStripe,
  placeOrderChapa,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripeOrder,
};
