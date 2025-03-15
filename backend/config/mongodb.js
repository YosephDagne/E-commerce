import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    // Use your MongoDB URI to connect to the database
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log success
    console.log("Connected to the database");
  } catch (error) {
    // Log any errors
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
