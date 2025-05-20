// src/pages/ViewBookings.jsx
import React, { useEffect, useState } from "react";
import { getAllBookings } from "../services/booking";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getAllBookings();
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">All Bookings</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Rooms</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">From</th>
            <th className="border px-4 py-2">To</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">
                {
                  // ✅ Room object ya array handle kar rahe:
                  Array.isArray(b.room)
                    ? b.room.map((r, idx) => <div key={idx}>{r.roomNumber}</div>)
                    : b.room?.roomNumber || "N/A"
                }
              </td>
              <td className="border px-4 py-2">{b.name}</td>
              <td className="border px-4 py-2">{b.phone_no}</td>
              <td className="border px-4 py-2">{b.fromDate}</td>
              <td className="border px-4 py-2">{b.toDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
