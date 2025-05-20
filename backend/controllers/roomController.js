
const Room = require("../models/Rooms");
const Booking = require("../models/Booking");

//  room initialiazing
exports.initializeRooms = async (req, res) => {
  const count = await Room.countDocuments();
  if (count === 0) {
    let rooms = [];
    for (let i = 1; i <= 100; i++) {
      rooms.push({ roomNumber: i });
    }
    await Room.insertMany(rooms);
    res.send("Rooms initialized");
  } else {
    res.send("Rooms already initialized");
  }
};

// room bookking
exports.bookRoom = async (req, res) => {
  const { fromDate, toDate, name, phone_no } = req.body;

  const allRooms = await Room.find();
  for (let room of allRooms) {
    const overlapping = await Booking.findOne({
      room: room._id,
      $or: [
        {
          fromDate: { $lte: new Date(toDate) },
          toDate: { $gte: new Date(fromDate) },
        },
      ],
    });

    if (!overlapping) {
      const newBooking = new Booking({
        room: room._id,
        fromDate,
        toDate, 
        name, 
        phone_no,
      });
      await newBooking.save();
      return res.status(200).json({
        message: `Congrats Room booked successfully.`,
        "Your Id": `${room._id} please submit this in hotel`,
        "Room Number": room.roomNumber,
        Name : name, 
        "Contact No.": phone_no
      });
    }
  }

  res.status(400).json({ message: "No rooms available for given dates" });
};

// room availability
exports.getStats = async (req, res) => {
  const totalRooms = await Room.countDocuments();
  const bookings = await Booking.find();
  const bookedRoomIds = bookings.map((b) => b.room.toString());
  const uniqueBookedRooms = [...new Set(bookedRoomIds)];
  const booked = uniqueBookedRooms.length;
  const available = totalRooms - booked;

  res.json({
    totalRooms,
    booked,
    available,
  });
  // res.json({
  //   totalRooms,
  //   booked,
  //   available,
  // });
};


// booking cancel
exports.cancelBooking = async (req, res) => {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await Booking.findByIdAndDelete(bookingId);

    res.status(200).json({
      message: "Booking cancelled successfully",
      cancelledBookingId: bookingId
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



// fetch all booking
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("room");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};
