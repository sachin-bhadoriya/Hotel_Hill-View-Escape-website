import React, { useState, useEffect } from "react";
import { cancelRoom, getCancellationHistory } from "../services/booking";

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  const handleCancel = async () => {
    try {
      const res = await cancelRoom(bookingId);
      setMessage(res.data.message);
      fetchCancellationHistory(); // Refresh history after cancellation
    } catch (err) {
      setMessage(err.response?.data?.message || "Cancellation failed");
    }
  };

  const fetchCancellationHistory = async () => {
    try {
      const res = await getCancellationHistory();
      setHistory(res.data); // Assuming API returns an array
    } catch (err) {
      console.error("Failed to fetch cancellation history", err);
    }
  };

  useEffect(() => {
    fetchCancellationHistory();
  }, []);

  return (
    <div className="p-4 booking-info-admin">
      <h2 className="text-xl font-bold mb-2">Cancel a Booking</h2>
      <input
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
        placeholder="Booking ID"
        className="border p-2"
      />
      <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 ml-2">
        Cancel
      </button>
      <p className="mt-2">{message}</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Cancellation History</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Room no.</th>
            <th className="p-2 border">Booking ID</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">phone no.</th>
            <th className="p-2 border">Cancelled On</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} className="text-center">
               <td className="border px-4 py-2">
                {
                  // ✅ Room object ya array handle kar rahe:
                  Array.isArray(item.room)
                    ? item.room.map((r, idx) => <div key={idx}>{r.roomNumber}</div>)
                    : item.room?.roomNumber || "N/A"
                }
              </td>
              <td className="border p-2">{item._id}</td>
              <td className="border p-2">{item.name || "N/A"}</td>
              <td className="border p-2">{item.phone_no || "N/A"}</td>
              <td className="border p-2">{new Date(item.cancelledAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancelBooking;
