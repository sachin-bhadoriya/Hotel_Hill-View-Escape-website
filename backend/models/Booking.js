import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
  roomType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  specialRequests: { type: String },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: "Booked" },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
