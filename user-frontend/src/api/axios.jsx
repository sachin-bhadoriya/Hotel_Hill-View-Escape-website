import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/Hill-View-Backend",
});

export default api;

