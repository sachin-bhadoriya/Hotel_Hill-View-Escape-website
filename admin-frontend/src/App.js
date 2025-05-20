
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookRoom from "./pages/BookRoom";
import CancelBooking from "./pages/CancelBooking";
import ViewBookings from "./pages/ViewBookings";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/book" className="mr-4">Book Room</Link>
          <Link to="/cancel" className="mr-4">Cancel Booking</Link>
          <Link to="/bookings">View Bookings</Link>
        </nav>
        <Routes>
          <Route path="/book" element={<BookRoom />} />
          <Route path="/cancel" element={<CancelBooking />} />
          <Route path="/bookings" element={<ViewBookings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

