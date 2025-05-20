// src/pages/BookRoom.jsx
import React, { useState } from "react";
import { bookRoom } from "../services/booking";

const BookRoom = () => {
  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    name: "",
    phone_no: "",
    fromDate: today,
    toDate: today,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await bookRoom(form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Booking failed");
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Book a Room</h2>

      <div className="mb-2">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-2">
        <input
          name="phone_no"
          placeholder="Phone"
          value={form.phone_no}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">From Date</label>
        <input
          name="fromDate"
          type="date"
          value={form.fromDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">To Date</label>
        <input
          name="toDate"
          type="date"
          value={form.toDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Book
      </button>

      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default BookRoom;
