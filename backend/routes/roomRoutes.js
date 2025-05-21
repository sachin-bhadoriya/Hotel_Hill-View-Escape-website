const express = require("express");
const router = express.Router();
const {
  initializeRooms,
  bookRoom,
  getStats,
  cancelBooking,
  getAllBookings,
} = require("../controllers/roomController");
const bookingController = require("../controllers/roomController");


// use this api in thunderclient or postman http://localhost:5000/channel-manager/rooms/<yaha neeche bali link use karna>
router.get("/init", initializeRooms);
router.get("/cancellations", bookingController.getCancelledBookings);
router.post("/book", bookRoom);
router.get("/stats", getStats);
router.get("/bookings", getAllBookings);
router.delete("/cancel/:id", cancelBooking);

  
module.exports = router;
