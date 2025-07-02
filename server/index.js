import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
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
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();

// Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



const app = express();
dotenv.config();


// Middlewares 
app.use(express.json())
app.use(cookieParser())
// Static file serving
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));





// app.get("/", (req, res) => {
//   res.send("Hello Bukan");
// });



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

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
})

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
