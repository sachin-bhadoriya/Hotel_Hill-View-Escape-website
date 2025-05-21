// src/services/booking.js
import api from "../api/axios";
import axios from "axios";

// export const cancelRoom = (bookingId) => axios.post("/api/bookings/cancel", { bookingId });

export const getCancellationHistory = () => api.get("/rooms/cancellations");

export const bookRoom = (data) => api.post("/rooms/book", data);
export const cancelRoom = (id) => api.delete(`/rooms/cancel/${id}`);
export const getAllBookings = () => api.get("/rooms/bookings");

