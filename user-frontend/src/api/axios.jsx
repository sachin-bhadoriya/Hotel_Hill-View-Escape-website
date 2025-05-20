import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/channel-manager",
});

export default api;

