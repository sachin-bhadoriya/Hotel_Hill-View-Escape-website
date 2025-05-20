import api from "../../../api/axios"
import React, { useState } from "react";
import '../../CSSFile/Booking.css'

export const bookRoom = (data) => api.post("/rooms/book", data);

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
      const today = new Date().toISOString().split("T")[0];
      setForm({
        name: "",
        phone_no: "",
        fromDate: today,
        toDate: today,
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Booking failed");
      console.error(err);
    }
  };

  return (
    <div className="p-4 book-room custom-form-container">
      <h2 className="text-xl text-center font-bold mb-4 custom-form-heading">
        Book a Room
      </h2>
      <div className="booking-room-form">

        <div className="mb-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="custom-input"
          />
        </div>

        <div className="mb-3">
          <input
            name="phone_no"
            placeholder="Phone"
            value={form.phone_no}
            onChange={handleChange}
            className="custom-input"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="custom-label">From Date</label>
        <input
          name="fromDate"
          type="date"
          value={form.fromDate}
          onChange={handleChange}
          className="custom-input"
        />
      </div>

      <div className="mb-3">
        <label className="custom-label">To Date</label>
        <input
          name="toDate"
          type="date"
          value={form.toDate}
          onChange={handleChange}
          className="custom-input"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="custom-button"
      >
        Book
      </button>

      {message && (
        <p className="custom-message mt-4">{message}</p>
      )}
    </div>

  );
};

export default BookRoom;


