const express = require("express");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/channel-manager/rooms", roomRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
