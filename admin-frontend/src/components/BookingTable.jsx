import React from "react";

const BookingTable = ({ bookings, onCancel }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Guests</th>
          <th>Room Type</th>
          <th>From</th>
          <th>To</th>
          <th>Special Requests</th>
          <th>Payment</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.length === 0 && (
          <tr>
            <td colSpan="11" style={{ textAlign: "center" }}>No bookings found</td>
          </tr>
        )}
        {bookings.map((b) => (
          <tr key={b._id}>
            <td>{b.fullName}</td>
            <td>{b.phoneNumber}</td>
            <td>{b.email}</td>
            <td>{b.numberOfGuests}</td>
            <td>{b.roomType}</td>
            <td>{new Date(b.fromDate).toLocaleDateString()}</td>
            <td>{new Date(b.toDate).toLocaleDateString()}</td>
            <td>{b.specialRequests || "-"}</td>
            <td>{b.paymentMethod}</td>
            <td>{b.status}</td>
            <td>
              {b.status !== "Cancelled" && (
                <button onClick={() => onCancel(b._id)} style={{ cursor: "pointer" }}>
                  Cancel
                </button>
              )}
              {b.status === "Cancelled" && <span>—</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
