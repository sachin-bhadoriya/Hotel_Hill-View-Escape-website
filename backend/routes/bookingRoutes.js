import express from 'express'
import { 
  // createBooking, 
  getAllBookings, 
  cancelBooking, 
  getCancelledBookings 
} from "../controllers/bookingController.js";

import sendEmail from "../utils/sendEmail.js";

import BookingModel from "../models/Booking.js";








const router = express.Router();
// 👇 Test route for email
// router.post("/test-email", async (req, res) => {
//   try {
//     await sendEmail({
//       email: "arekyahua10@gmail.com",
//       fullName: "Anuj",
//       fromDate: "2025-06-01",
//       toDate: "2025-06-05"
//     });
//     res.send("✅ Email sent successfully!");
//   } catch (error) {
//     console.error("❌ Email error:", error);
//     res.status(500).send("Email failed.");
//   }
// });


router.post('/create-booking', async (req, res) => {
  try {
    // booking creation logic
    const { email, fullName, phoneNumber,roomType, paymentMethod,specialRequests, numberOfGuests, fromDate, toDate } = req.body;

    // Send email after booking created
    console.log("Booking created, sending email...");
    await sendEmail({ email, fullName, phoneNumber,roomType, paymentMethod,specialRequests, numberOfGuests, fromDate, toDate });
    console.log("Email sent after booking");

    res.status(201).json({ message: "Booking created and email sent" });
  } catch (error) {
    console.error("Booking creation/email error:", error);
    res.status(500).json({ error: "Booking or email failed" });
  }
});






// router.post("/book", createBooking);

router.post("/book", async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      numberOfGuests,
      roomType,
      fromDate,
      toDate,
      specialRequests,
      paymentMethod,
    } = req.body;

    // Save booking to DB
    const booking = await BookingModel.create({
      fullName,
      phoneNumber,
      email,
      numberOfGuests,
      roomType,
      fromDate,
      toDate,
      specialRequests,
      paymentMethod,
    });

    // Send confirmation email
    await sendEmail({
      email, fullName, phoneNumber,roomType, paymentMethod,specialRequests, numberOfGuests, fromDate, toDate,
    });

    res.status(201).json({ message: "Booking successful & confirmation email sent!", booking });
  } catch (error) {
    console.error("Booking or email error:", error);
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});




router.get("/all", getAllBookings);
router.put("/cancel/:id", cancelBooking);
router.get("/cancelled", getCancelledBookings);

export default router;