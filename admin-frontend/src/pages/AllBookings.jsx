import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingTable from "../components/BookingTable";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/bookings/all");
      setBookings(data);
    } catch (error) {
      alert("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    try {
      await axios.put(`http://localhost:5000/api/bookings/cancel/${id}`);
      alert("Booking cancelled");
      fetchBookings();
    } catch (error) {
      alert("Failed to cancel booking");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>All Bookings</h2>
      <BookingTable bookings={bookings} onCancel={cancelBooking} />
    </div>
  );
};

export default AllBookings;
