import Booking from "../models/Booking.js";
import sendEmail from "../utils/sendEmail.js";
// import sendWhatsApp from "../utils/sendWhatsApp.js";


export const bookRoom = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    // Email confirmation
    await sendEmail(booking);

    // WhatsApp notification
    // await sendWhatsApp(booking);

    res.status(201).json({ success: true, message: "Booking successful", booking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
};

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "Cancelled" },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking cancelled", booking });
  } catch (error) {
    res.status(500).json({ error: "Failed to cancel booking" });
  }
};

export const getCancelledBookings = async (req, res) => {
  try {
    const cancelled = await Booking.find({ status: "Cancelled" }).sort({ createdAt: -1 });
    res.json(cancelled);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cancelled bookings" });
  }
};
