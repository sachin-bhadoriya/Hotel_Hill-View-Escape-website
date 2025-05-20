const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  fromDate: Date,
  toDate: Date,
  name: String,
  phone_no: String
});

module.exports = mongoose.model("Booking", bookingSchema);
