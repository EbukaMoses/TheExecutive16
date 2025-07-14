import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import businessRoute from "./routes/business.js"
import blogRoute from "./routes/blog.js"
import categoryRoute from "./routes/category.js"
import eventRoute from "./routes/events.js"
import testimonyRoute from "./routes/testimony.js"
import suggestionRoute from "./routes/suggestion.js"
import commentRoute from "./routes/comment.js"
import hobbyRoute from "./routes/hobby.js"
import heroRoute from "./routes/heros.js"

const app = express();
dotenv.config();
// dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"});

// Global Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100
});
app.use(limiter);

// Static file serving
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.get("/", (req, res) => {
//   res.send("Hello Bukan");
// });

app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);
app.use("/api/business", businessRoute);
app.use("/api/blog", blogRoute);
app.use("/api/category", categoryRoute);
app.use("/api/event", eventRoute);
app.use("/api/testimony", testimonyRoute);
app.use("/api/suggestion", suggestionRoute);
app.use("/api/comment", commentRoute);
app.use("/api/hobby", hobbyRoute);
app.use("/api/hero", heroRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected!", () => {
  console.log("mongoDB connected");
});

app.listen(process.env.PORT || 3000, () => {
  connect();
  console.log("Connected to Backend");
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
