import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Or destructure `sign` from `jwt`
const { sign } = jwt;

const createToken = () => {
  return jwt, sign({ id }, process.env.JWT_SECRET);
};
// Route for user login
const loginUser = async (req, res) => {};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // validating email format and strong password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid  email",
      });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }

    // hashing password using bcrypt

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // creating new user document
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
  }
};

//Route for for admin login

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
