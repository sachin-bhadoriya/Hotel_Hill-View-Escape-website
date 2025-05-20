// src/services/booking.js
import api from "../api/axios";

export const bookRoom = (data) => api.post("/rooms/book", data);
export const cancelRoom = (id) => api.delete(`/rooms/cancel/${id}`);
export const getAllBookings = () => api.get("/rooms/bookings");

