import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    numberOfGuests: 1,
    roomType: "Deluxe",
    fromDate: "",
    toDate: "",
    specialRequests: "",
    paymentMethod: "Online",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.fullName ||
      !form.phoneNumber ||
      !form.email ||
      !form.numberOfGuests ||
      !form.roomType ||
      !form.fromDate ||
      !form.toDate ||
      !form.paymentMethod
    ) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/bookings/book", form);
      alert(res.data.message);
      setForm({
        fullName: "",
        phoneNumber: "",
        email: "",
        numberOfGuests: 1,
        roomType: "Deluxe",
        fromDate: "",
        toDate: "",
        specialRequests: "",
        paymentMethod: "Online",
      });
    } catch (error) {
      alert("Failed to book room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="room-booking-page" onSubmit={handleSubmit}>
      <label>
        Full Name*:
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Phone Number*:
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Email*:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Number of Guests*:
        <input
          type="number"
          name="numberOfGuests"
          min="1"
          value={form.numberOfGuests}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Room Type*:
        <select name="roomType" value={form.roomType} onChange={handleChange} required>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </label>
      <br /><br />

      <label>
        From Date*:
        <input
          type="date"
          name="fromDate"
          value={form.fromDate}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        To Date*:
        <input
          type="date"
          name="toDate"
          value={form.toDate}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Special Requests:
        <textarea
          name="specialRequests"
          value={form.specialRequests}
          onChange={handleChange}
          placeholder="Optional"
        />
      </label>
      <br /><br />

      <label>
        Payment Method*:
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </label>
      <br /><br />

      <button type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Room"}
      </button>
    </form>
  );
};

export default Booking;
