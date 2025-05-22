import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllBookings from "./pages/AllBookings";
import CancelledBookings from "./pages/CancelledBookings";

const App = () => {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Hotel Admin Panel</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 15 }}>All Bookings</Link>
          <Link to="/cancelled">Cancelled Bookings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllBookings />} />
          <Route path="/cancelled" element={<CancelledBookings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
