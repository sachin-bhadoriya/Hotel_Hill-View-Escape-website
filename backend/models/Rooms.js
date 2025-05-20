const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: Number,
});

module.exports = mongoose.model("Room", roomSchema);
