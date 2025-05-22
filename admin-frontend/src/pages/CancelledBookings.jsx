import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingTable from "../components/BookingTable";

const CancelledBookings = () => {
  const [cancelled, setCancelled] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCancelled = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/bookings/cancelled");
      setCancelled(data);
    } catch (error) {
      alert("Failed to fetch cancelled bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCancelled();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Cancelled Bookings</h2>
      <BookingTable bookings={cancelled} onCancel={() => {}} />
    </div>
  );
};

export default CancelledBookings;
