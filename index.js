const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const swaggerSetup = require("./src/config/swagger");

const getTokenRoute = require("./src/routes/getTokenRoute");
const authRoute = require("./src/routes/authRoute");
const carRoute = require("./src/routes/carRoute");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/", getTokenRoute);
app.use("/api/auth", authRoute);
app.use("/api/cars", carRoute);

// Setup Swagger
swaggerSetup(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
