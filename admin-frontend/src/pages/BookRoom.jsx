
// src/pages/BookRoom.jsx
import React, { useState } from "react";
import { bookRoom } from "../services/booking";

const BookRoom = () => {
  const [form, setForm] = useState({ name: "", phone_no: "", fromDate: "", toDate: "" });
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
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Book a Room</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
      <input name="phone_no" placeholder="Phone" onChange={handleChange} className="border p-2 ml-2" />
      <input name="fromDate" type="date" defaultValue={new Date().toISOString().split('T')[0]} onChange={handleChange} className="border p-2 ml-2" />
      <input name="toDate" type="date" defaultValue={new Date().toISOString().split('T')[0]} onChange={handleChange} className="border p-2 ml-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 ml-2">Book</button>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default BookRoom;


