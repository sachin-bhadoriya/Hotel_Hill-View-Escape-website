// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/channel-manager", // 👈 change if needed
});

export default api;

