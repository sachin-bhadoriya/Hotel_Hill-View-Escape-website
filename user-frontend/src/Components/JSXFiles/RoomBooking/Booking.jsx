import React, { useState } from "react";
import axios from "axios";
import '../../CSSFile/RoomBooking.css'
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
    <>
      <div className="room-booking-head"><h1>Book your Room,</h1><h3 className="">give us a chance to serve</h3></div>
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-6 video-space"></div>
          <div className="col-sm-6 video-space"></div> */}
        </div>
      </div>


      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Number of Guests*</label>
              <input
                type="number"
                name="numberOfGuests"
                min="1"
                value={form.numberOfGuests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full">
              <label>Room Type*</label>
              <select name="roomType" value={form.roomType} onChange={handleChange} required>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>

            <div className="form-group">
              <label>From Date*</label>
              <input
                type="date"
                name="fromDate"
                value={form.fromDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>To Date*</label>
              <input
                type="date"
                name="toDate"
                value={form.toDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full">
              <label>Special Requests</label>
              <textarea
                name="specialRequests"
                value={form.specialRequests}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            <div className="form-group full">
              <label>Payment Method*</label>
              <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Room"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
