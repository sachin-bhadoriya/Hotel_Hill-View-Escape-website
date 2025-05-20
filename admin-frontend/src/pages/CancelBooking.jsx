
// src/pages/CancelBooking.jsx
import React, { useState } from "react";
import { cancelRoom } from "../services/booking";

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = async () => {
    try {
      const res = await cancelRoom(bookingId);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Cancellation failed");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Cancel a Booking</h2>
      <input value={bookingId} onChange={(e) => setBookingId(e.target.value)} placeholder="Booking ID" className="border p-2" />
      <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 ml-2">Cancel</button>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default CancelBooking;
