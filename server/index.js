import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// Middlewares 
app.use(express.json())


app.use("/auth", authRoute);
app.use("/user", usersRoute);
app.use("/business", businessRoute);
app.use("/blog", blogRoute);
app.use("/category", categoryRoute);
app.use("/event", eventRoute);
app.use("/testimony", testimonyRoute);
app.use("/suggestion", suggestionRoute);
app.use("/comment", commentRoute);
app.use("/hobby", hobbyRoute);
app.use("/hero", heroRoute);


app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to Backend");
});
