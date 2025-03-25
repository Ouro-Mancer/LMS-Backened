
import mongoose from "mongoose";

export const connectDB = () => {
  console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // Debugging Step

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Database Connected Successfully !!");
    })
    .catch((err) => {
      console.error("❌ Error Connecting to Database:", err);
      process.exit(1); // Stop the server if the DB connection fails
    });
};
