const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const otpRoutes = require("./routes/otp.routes");
const transactionRoutes = require("./routes/transaction.routes");
const bankRoutes=require('./routes/bank.detail.routes')
const referralRoutes=require('./routes/referral.routes')
const PORT = process.env.PORT || 5000;


//Set up all the middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//Connect to the database
connectDB();

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log("Request body:", req.body); // Log the request body for debugging
  next();
});

//Set Up all the routes

app.use("/users", userRoutes);
app.use('/referral',referralRoutes)
app.use("/otp", otpRoutes);
app.use("/transactions", transactionRoutes);
app.use('/bank',bankRoutes);
app.get("/", (req, res) => {
  res.send(`Hello from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});
