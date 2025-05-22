import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bookingRoutes from "./routes/bookingRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);
// app.use("/api/payments", paymentRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
