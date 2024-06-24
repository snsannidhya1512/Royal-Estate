// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
// import cookieParser from "cookie-parser";

// dotenv.config();

// mongoose
//   .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });

// const app = express();
// app.use(express.json()); // Parse incoming JSON requests
// app.use(cookieParser());

// // Routes
// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);

// // Global error handling middleware (place at the bottom)
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const app = express();
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Global error handling middleware (place at the bottom)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
